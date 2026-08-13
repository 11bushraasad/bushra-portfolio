# Bushra Asad — Portfolio (General AI Fluency Capstone)

A pink retro pixel-art portfolio, built with React + Vite + Tailwind, with a working AI agent
that answers visitor questions using only the information on the page.

## Project structure

```
bushra-portfolio/
├── src/                   → React frontend (Vite)
│   ├── data/profile.js    → imports the shared profile data
│   ├── components/        → one component per section
│   │   └── ui/             → Section, Tag, PixelIcon (shared pixel-art building blocks)
│   └── App.jsx
├── shared/profile.json    → SINGLE SOURCE OF TRUTH for all personal content
│                             (used by both the site and the AI agent, so they never disagree)
├── server/                 → Express backend for the AI agent
│   ├── index.js            → POST /api/chat — calls the Anthropic API
│   └── .env.example
└── README.md
```

## 1. What's left for you to add manually

Everything personal lives in `shared/profile.json`. Real info (your name, email, University
Portal case study, Decode Labs and FlyRank internships, skills, AI toolkit) is already filled in.
A few things I don't have and left as clearly marked `[bracketed placeholders]` rather than
inventing them:

- **Resume link** — `contact.resume`. Until you add a real URL, the "Download Resume" button
  in the hero links to the Contact section instead, with a small note under it.
- **LinkedIn URL** — `contact.linkedin`. Shows as a disabled "LINKEDIN [ ADD LINK ]" button until set.
- **GitHub URL** — `contact.github`. Same treatment.
- **Decode Labs / FlyRank dates and responsibilities** — I didn't have these, so they're
  editable placeholder text in the two experience cards.
- **Software Engineering skills list** — add your actual languages/frameworks; I didn't fabricate any.
- **ChatGPT / Gemini specifics** in the AI Toolkit section — what you use each for.
- **Storyverse project details** — description, role, tools, problem/solution/outcome.

Open `shared/profile.json`, search for `[`, and fill each one in. No component file needs to
change for content updates.

## 2. Running it locally

You need two things running at once: the Vite frontend and the Express server that powers the
AI agent.

```bash
# 1. Install frontend dependencies (project root)
npm install

# 2. Install server dependencies
cd server
npm install
cd ..
```

### Set up your API key

The AI agent calls the Anthropic API from the **server**, never from the browser, so your key is
never exposed in frontend code.

1. Get an API key from the [Anthropic Console](https://console.anthropic.com/).
2. Copy `server/.env.example` to `server/.env`.
3. Paste your key in:
   ```
   ANTHROPIC_API_KEY=sk-ant-your-real-key
   ```

`server/.env` is already listed in `.gitignore`, so it won't be committed.

### Start both servers

Terminal 1 — the AI agent backend:
```bash
cd server
npm start
```

Terminal 2 — the frontend:
```bash
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`). The frontend proxies `/api/*`
requests to the Express server on port 3001, so the agent works out of the box in dev, as long
as both terminals are running.

## 3. About the "Something went wrong reaching the agent" message

That message means the **frontend and backend are wired correctly** — the frontend successfully
reached the server, and the server responded with a clear error because no `ANTHROPIC_API_KEY`
was configured yet. It's not a bug in the connection; it's the server telling you what to fix.
Once you add your key to `server/.env` and restart the server (Terminal 1), the same suggested
questions ("Who is Bushra?", "What are her skills?", etc.) will return real answers.

The frontend now shows the server's specific error message rather than a generic one, so a
missing key, a stopped server, and a bad request all look different if something goes wrong.

## 4. Building for production

```bash
npm run build
```

Outputs a static site to `dist/`. The Express server (`server/index.js`) is a separate process
that must also be deployed and reachable at `/api/chat` from wherever the static site is hosted.

## 5. Deploying

- **Frontend (`dist/`)** → any static host: Vercel, Netlify, GitHub Pages, Cloudflare Pages.
- **Backend (`server/`)** → any Node host: Render, Railway, Fly.io, or a small VPS.

Steps:

1. Deploy `server/` to your Node host, and set `ANTHROPIC_API_KEY` as an environment variable in
   that host's dashboard — never in code.
2. Note the deployed server's URL (e.g. `https://your-agent-api.onrender.com`).
3. `vite.config.js`'s `/api` proxy only applies to local dev. For production, either point your
   static host's `/api/*` route at the server URL (most hosts support rewrites), or change the
   `fetch('/api/chat', ...)` call in `src/components/AIAgent.jsx` to the full server URL.
4. Deploy the built `dist/` output to your static host.

If you'd rather have one deploy target, most Node hosts can also serve the built `dist/` folder
directly from Express (add `express.static('../dist')` to `server/index.js`) instead of running
two services.

## 6. How the AI agent works

- The chat UI (`src/components/AIAgent.jsx`) handles the message log, loading state, error state,
  suggested questions, and a clear-chat button.
- Every message posts to `POST /api/chat` on the Express server.
- The server (`server/index.js`) loads `shared/profile.json` into the system prompt and instructs
  the model to answer **only** from that data — including telling visitors when a detail is still
  a placeholder, instead of inventing one.
- Model used: `claude-haiku-4-5-20251001` (fast and inexpensive for an FAQ-style agent) — change
  the `model` field in `server/index.js` if you'd prefer a different one.

## 7. What to submit as your capstone link

The **live deployed frontend URL**, once both the frontend and the `/api/chat` backend are
deployed and connected — that's the link that shows a real, working site with a functioning
AI agent, not a local-only build.
