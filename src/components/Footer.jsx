import PixelIcon from './ui/PixelIcon.jsx'

export default function Footer({ name }) {
  return (
    <footer className="border-t-2 border-ink-line px-6 md:px-10 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="font-mono text-xs text-paper-muted flex items-center gap-2">
          <PixelIcon type="heart" size={11} color="#FF5FB4" />
          {name} — built with React, Tailwind &amp; Claude
        </p>
        <a href="#top" className="font-mono text-xs text-paper-muted hover:text-pink transition-colors">
          BACK TO TOP ↑
        </a>
      </div>
    </footer>
  )
}
