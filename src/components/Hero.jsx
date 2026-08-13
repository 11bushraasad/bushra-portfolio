import PixelIcon from './ui/PixelIcon.jsx'

export default function Hero({ profile }) {
  const resumeIsReady = profile.contact.resume && !profile.contact.resume.startsWith('[')

  return (
    <section id="top" className="relative overflow-hidden border-b-2 border-ink-line scroll-mt-20">
      <div className="absolute inset-0 pixel-sky pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/95 to-ink pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 pt-24 pb-20 md:pt-32 md:pb-28 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="eyebrow mb-6 flex items-center gap-2">
            <PixelIcon type="sparkle" size={12} color="#B9A6FF" className="pixel-sparkle" />
            OPEN TO UI/UX &amp; SWE ROLES
          </div>

          <h1 className="font-pixel text-2xl sm:text-3xl md:text-4xl leading-relaxed text-paper mb-6">
            BUSHRA <span className="text-pink">ASAD</span>
          </h1>

          <p className="font-pixel text-sm md:text-base text-lavender mb-5 leading-relaxed">
            Software Engineer &amp; UI/UX Designer
          </p>

          <p className="text-paper-muted max-w-lg mb-10 leading-relaxed">
            {profile.shortIntro}
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="pixel-btn bg-pink text-ink text-[11px] px-5 py-3.5 hover:bg-pink-soft">
              VIEW MY WORK
            </a>
            <a
              href={resumeIsReady ? profile.contact.resume : '#contact'}
              target={resumeIsReady ? '_blank' : undefined}
              rel={resumeIsReady ? 'noreferrer' : undefined}
              className="pixel-btn bg-ink-soft text-lavender text-[11px] px-5 py-3.5 hover:text-pink border-lavender"
            >
              DOWNLOAD RESUME
            </a>
          </div>
          {!resumeIsReady && (
            <p className="font-mono text-[11px] text-paper-muted/60 mt-3">
              [ resume link not added yet — button leads to Contact ]
            </p>
          )}
        </div>

        {/* Retro pixel computer window */}
        <div className="relative flex justify-center items-center">
          <div className="pixel-border bg-ink-soft w-full max-w-[300px]">
            {/* Title bar */}
            <div className="flex items-center justify-between bg-magenta px-3 py-2 border-b-[3px] border-paper">
              <span className="font-pixel text-[9px] text-ink">BUSHRA.EXE</span>
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 bg-ink" />
                <span className="w-2.5 h-2.5 bg-ink" />
                <span className="w-2.5 h-2.5 bg-pink" />
              </div>
            </div>

            {/* Window body */}
            <div className="p-5 flex flex-col items-center gap-4">
              {/* Pixel avatar */}
              <div className="w-24 h-24 bg-lavender/20 border-[3px] border-paper flex items-center justify-center relative">
                <PixelIcon type="heart" size={40} color="#FF5FB4" />
                <PixelIcon type="star" size={14} color="#DCD2FF" className="absolute -top-2 -right-2 pixel-sparkle" />
                <PixelIcon type="sparkle" size={12} color="#FFA9DD" className="absolute -bottom-1 -left-2 pixel-sparkle" />
              </div>

              <div className="w-full space-y-2">
                <div className="flex items-center justify-between font-mono text-[11px] text-paper-muted">
                  <span>STATUS</span>
                  <span className="flex items-center gap-1.5 text-pink">
                    <span className="w-2 h-2 bg-pink pixel-sparkle" />
                    ONLINE
                  </span>
                </div>
                <div className="w-full h-3 bg-ink border-2 border-ink-line">
                  <div className="h-full bg-gradient-to-r from-pink to-magenta w-[85%]" />
                </div>
                <p className="font-mono text-[10px] text-paper-muted text-center pt-1">
                  loading creativity... 85%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
