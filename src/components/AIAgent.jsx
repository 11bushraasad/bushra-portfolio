import { useEffect, useRef, useState } from 'react'
import Section from './ui/Section.jsx'
import PixelIcon from './ui/PixelIcon.jsx'

export default function AIAgent({ profile }) {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, loading])

  async function sendMessage(text) {
    const question = text.trim()
    if (!question || loading) return

    const nextMessages = [...messages, { role: 'user', content: question }]
    setMessages(nextMessages)
    setInput('')
    setError(null)
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages })
      })

      let data
      try {
        data = await res.json()
      } catch {
        data = null
      }

      if (!res.ok) {
        // Surface the server's actual error message rather than a generic one,
        // so a missing API key vs. a network issue vs. a bad request are distinguishable.
        throw new Error(data?.error || `Request failed (${res.status})`)
      }

      setMessages([...nextMessages, { role: 'assistant', content: data.reply }])
    } catch (err) {
      const isNetworkError = err instanceof TypeError
      setError(
        isNetworkError
          ? "Can't reach the agent server. Make sure it's running — see the README's 'Running it locally' section."
          : err.message
      )
    } finally {
      setLoading(false)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    sendMessage(input)
  }

  function clearChat() {
    setMessages([])
    setError(null)
  }

  return (
    <Section id="agent" index="06" label="Interactive" title="MEET MY AI AGENT">
      <p className="text-paper-muted leading-relaxed max-w-2xl mb-8">
        Ask about my skills, projects, experience, or AI workflow. The agent only answers using the
        information on this page — it won't invent anything about me.
      </p>

      <div className="pixel-border bg-ink-soft overflow-hidden">
        {/* Title bar to match the retro window motif */}
        <div className="flex items-center justify-between bg-magenta px-4 py-2 border-b-[3px] border-paper">
          <span className="font-pixel text-[9px] text-ink flex items-center gap-2">
            <PixelIcon type="sparkle" size={10} color="#120C1E" />
            AGENT.EXE
          </span>
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 bg-ink" />
            <span className="w-2.5 h-2.5 bg-ink" />
            <span className="w-2.5 h-2.5 bg-pink" />
          </div>
        </div>

        {/* Suggested questions */}
        <div className="flex flex-wrap gap-2 p-4 border-b-2 border-ink-line">
          {profile.suggestedQuestions.map((q) => (
            <button
              key={q}
              onClick={() => sendMessage(q)}
              disabled={loading}
              className="pixel-tag text-xs text-lavender px-3 py-1.5 hover:text-pink hover:border-pink transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Message log */}
        <div ref={scrollRef} className="h-80 md:h-96 overflow-y-auto px-4 py-4 space-y-4">
          {messages.length === 0 && !loading && !error && (
            <p className="text-paper-muted/60 text-sm font-mono">
              [ no messages yet — try a suggested question above, or ask your own ]
            </p>
          )}

          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[85%] px-4 py-2.5 text-sm leading-relaxed border-2 ${
                  m.role === 'user'
                    ? 'bg-pink text-ink border-ink'
                    : 'bg-ink border-ink-line text-paper'
                }`}
              >
                {m.content}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="bg-ink border-2 border-ink-line text-paper-muted px-4 py-2.5 text-sm font-mono flex items-center gap-2">
                <PixelIcon type="sparkle" size={10} color="#B9A6FF" className="pixel-sparkle" />
                thinking…
              </div>
            </div>
          )}

          {error && (
            <div className="bg-ink border-2 border-pink text-pink px-4 py-2.5 text-sm">
              {error}
            </div>
          )}
        </div>

        {/* Input row */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2 p-4 border-t-2 border-ink-line">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about Bushra's skills, projects, or AI workflow…"
            className="flex-1 bg-ink border-2 border-ink-line px-3 py-2.5 text-sm text-paper placeholder:text-paper-muted/60 focus:border-pink outline-none"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="pixel-btn bg-pink text-ink text-[10px] px-4 py-2.5 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            SEND
          </button>
          <button
            type="button"
            onClick={clearChat}
            disabled={messages.length === 0}
            className="pixel-btn bg-ink-soft text-paper-muted text-[10px] px-3 py-2.5 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            CLEAR
          </button>
        </form>
      </div>
    </Section>
  )
}
