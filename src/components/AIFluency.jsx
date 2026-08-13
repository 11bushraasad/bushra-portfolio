import Section from './ui/Section.jsx'

export default function AIFluency({ profile }) {
  return (
    <Section id="ai-fluency" index="07" label="Capstone" title="AI FLUENCY">
      <ol className="space-y-3">
        {profile.aiFluency.points.map((point, i) => (
          <li key={i} className="flex gap-4 items-start border-b-2 border-ink-line pb-3">
            <span className="font-pixel text-pink text-[10px] pt-0.5">{String(i + 1).padStart(2, '0')}</span>
            <span className="text-paper-muted leading-relaxed text-sm">{point}</span>
          </li>
        ))}
      </ol>
    </Section>
  )
}
