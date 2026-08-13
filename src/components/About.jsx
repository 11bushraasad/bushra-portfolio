import Section from './ui/Section.jsx'

export default function About({ profile }) {
  return (
    <Section id="about" index="01" label="About" title="A LITTLE ABOUT ME">
      <div className="space-y-5">
        {profile.aboutParagraphs.map((p, i) => (
          <p key={i} className="text-paper-muted leading-relaxed max-w-2xl">
            {p}
          </p>
        ))}
      </div>
    </Section>
  )
}
