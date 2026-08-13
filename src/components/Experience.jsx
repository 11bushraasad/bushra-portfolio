import Section from './ui/Section.jsx'
import PixelIcon from './ui/PixelIcon.jsx'

export default function Experience({ profile }) {
  return (
    <Section id="experience" index="05" label="Experience" title="WHERE I'VE WORKED">
      <div className="grid sm:grid-cols-2 gap-6">
        {profile.experience.map((job, i) => (
          <div key={i} className="pixel-card p-6 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <PixelIcon type="star" size={13} color="#B9A6FF" />
              <h3 className="font-pixel text-xs text-paper">{job.company.toUpperCase()}</h3>
            </div>
            <p className="text-lavender text-sm">{job.role}</p>
            <p className="font-mono text-[11px] text-paper-muted">{job.dates}</p>
            <ul className="space-y-1.5 pt-2 border-t-2 border-ink-line">
              {job.responsibilities.map((r, idx) => (
                <li
                  key={idx}
                  className="text-paper-muted text-sm leading-relaxed pl-4 relative before:content-['♥'] before:absolute before:left-0 before:text-pink before:text-xs"
                >
                  {r}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
