import Section from './ui/Section.jsx'
import PixelIcon from './ui/PixelIcon.jsx'

function ContactLink({ href, label, isPlaceholder }) {
  if (isPlaceholder) {
    return (
      <span
        className="pixel-btn bg-ink-soft text-paper-muted/60 text-[11px] px-5 py-3.5 text-center cursor-not-allowed"
        title="Add your real profile URL in shared/profile.json"
      >
        {label} [ ADD LINK ]
      </span>
    )
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="pixel-btn bg-ink-soft text-lavender text-[11px] px-5 py-3.5 hover:text-pink text-center"
    >
      {label}
    </a>
  )
}

export default function Contact({ profile }) {
  const { contact } = profile
  const linkedinPlaceholder = contact.linkedin.startsWith('[')
  const githubPlaceholder = contact.github.startsWith('[')

  return (
    <Section id="contact" index="08" label="Contact" title="LET'S TALK!">
      <div className="pixel-border bg-ink-soft p-8 max-w-2xl">
        <div className="flex items-center gap-2 mb-4">
          <PixelIcon type="heart" size={16} color="#FF5FB4" className="pixel-sparkle" />
          <PixelIcon type="sparkle" size={12} color="#B9A6FF" className="pixel-sparkle" />
        </div>

        <p className="text-paper-muted leading-relaxed mb-8">{contact.ctaText}</p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={`mailto:${contact.email}`}
            className="pixel-btn bg-pink text-ink text-[11px] px-5 py-3.5 hover:bg-pink-soft text-center"
          >
            {contact.email}
          </a>
          <ContactLink href={contact.linkedin} label="LINKEDIN" isPlaceholder={linkedinPlaceholder} />
          <ContactLink href={contact.github} label="GITHUB" isPlaceholder={githubPlaceholder} />
        </div>
      </div>
    </Section>
  )
}
