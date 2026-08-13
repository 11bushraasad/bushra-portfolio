import { useState } from 'react'
import PixelIcon from './ui/PixelIcon.jsx'

const LINKS = [
  { href: '#top', label: 'HOME', n: '1' },
  { href: '#about', label: 'ABOUT', n: '2' },
  { href: '#skills', label: 'SKILLS', n: '3' },
  { href: '#projects', label: 'PROJECTS', n: '4' },
  { href: '#experience', label: 'EXPERIENCE', n: '5' },
  { href: '#contact', label: 'CONTACT', n: '6' }
]

export default function Navbar({ name }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-ink/95 backdrop-blur border-b-2 border-ink-line">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-10 h-16">
        <a href="#top" className="font-pixel text-xs text-pink flex items-center gap-2">
          <PixelIcon type="heart" size={14} color="#FF5FB4" />
          BUSHRA
        </a>

        <ul className="hidden lg:flex items-center gap-6">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-xs text-paper-muted hover:text-pink transition-colors"
              >
                <span className="text-magenta">{link.n}.</span> {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="pixel-btn hidden lg:inline-block bg-pink text-ink text-[10px] px-4 py-2.5 hover:bg-pink-soft"
        >
          LET'S TALK
        </a>

        <button
          className="lg:hidden font-mono text-xs uppercase tracking-wide text-paper pixel-tag px-3 py-1.5"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </nav>

      {open && (
        <ul id="mobile-nav" className="lg:hidden flex flex-col border-t-2 border-ink-line px-6 py-4 gap-4">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-mono text-sm text-paper-muted hover:text-pink transition-colors"
              >
                <span className="text-magenta">{link.n}.</span> {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="pixel-btn inline-block bg-pink text-ink text-[10px] px-4 py-2.5"
            >
              LET'S TALK
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}
