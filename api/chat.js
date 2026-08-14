import Anthropic from "@anthropic-ai/sdk";
import { readFileSync } from "fs";
import path from "path";

const profile = JSON.parse(
  readFileSync(
    path.join(process.cwd(), "shared", "profile.json"),
    "utf-8"
  )
);

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const SYSTEM_PROMPT = `You are the personal AI agent on ${profile.name}'s portfolio website.

Visitors ask you questions about her — her background, skills, projects, experience, and AI workflow.

Rules:
- Answer ONLY using the JSON profile data provided below.
- Do not invent facts, companies, dates, metrics, or achievements.
- If a visitor asks something the profile does not cover, say you don't have that information.
- Speak about Bushra in the third person ("she", "her").
- Keep answers conversational and concise.

Profile data:

${JSON.stringify(profile, null, 2)}`;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { messages } = req.body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({
        error: "messages array is required",
      });
    }

   if (!process.env.ANTHROPIC_API_KEY) {
  return res.status(500).json({
    error: "API key is missing",
    envKeys: Object.keys(process.env).filter(
      (key) => key.includes("ANTHROPIC")
    ),
  });
}

    const anthropicMessages = messages
      .filter(
        (m) =>
          m &&
          (m.role === "user" || m.role === "assistant") &&
          typeof m.content === "string"
      )
      .map((m) => ({
        role: m.role,
        content: m.content,
      }));

    const response = await anthropic.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 600,
      system: SYSTEM_PROMPT,
      messages: anthropicMessages,
    });

    const reply = response.content
      .filter((block) => block.type === "text")
      .map((block) => block.text)
      .join("\n")
      .trim();

    return res.json({
      reply:
        reply ||
        "I'm not sure how to answer that from what's on this page.",
    });
  } catch (err) {
    console.error("Error in /api/chat:", err);

    return res.status(500).json({
      error:
        "The agent had trouble responding. Please try again in a moment.",
    });
  }
}
