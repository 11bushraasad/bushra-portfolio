import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import Anthropic from '@anthropic-ai/sdk'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const profile = JSON.parse(readFileSync(path.join(__dirname, '..', 'shared', 'profile.json'), 'utf-8'))

const PORT = process.env.PORT || 3001

if (!process.env.ANTHROPIC_API_KEY) {
  console.warn(
    '\n[warning] ANTHROPIC_API_KEY is not set. The /api/chat endpoint will return an error until it is configured.\n' +
      'See server/.env.example and the project README.\n'
  )
}

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const SYSTEM_PROMPT = `You are the personal AI agent on ${profile.name}'s portfolio website.
Visitors ask you questions about her — her background, skills, projects, experience, and AI workflow.

Rules:
- Answer ONLY using the JSON profile data provided below. Do not invent facts, companies, dates, metrics, or achievements that are not present in the data.
- If the data contains a placeholder (text in square brackets, like "[Add company name]"), tell the visitor that detail hasn't been added yet rather than making something up.
- If a visitor asks something the profile data doesn't cover at all, say you don't have that information rather than guessing.
- Speak about Bushra in the third person ("she", "her").
- Keep answers conversational and concise — a few sentences, not an essay, unless the visitor asks for detail.

Profile data:
${JSON.stringify(profile, null, 2)}`

const app = express()
app.use(cors())
app.use(express.json())

app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'messages array is required' })
    }

    if (!process.env.ANTHROPIC_API_KEY) {
      return res.status(500).json({ error: 'Server is missing ANTHROPIC_API_KEY. See README for setup.' })
    }

    // Only forward role/content — trims anything unexpected from the client.
    const anthropicMessages = messages
      .filter((m) => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
      .map((m) => ({ role: m.role, content: m.content }))

    const response = await anthropic.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 600,
      system: SYSTEM_PROMPT,
      messages: anthropicMessages
    })

    const reply = response.content
      .filter((block) => block.type === 'text')
      .map((block) => block.text)
      .join('\n')
      .trim()

    res.json({ reply: reply || "I'm not sure how to answer that from what's on this page." })
  } catch (err) {
    console.error('Error in /api/chat:', err)
    res.status(500).json({ error: 'The agent had trouble responding. Please try again in a moment.' })
  }
})

app.get('/api/health', (_req, res) => res.json({ ok: true }))

app.listen(PORT, () => {
  console.log(`AI agent server running on http://localhost:${PORT}`)
})
