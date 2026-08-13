import Section from './ui/Section.jsx'
import PixelIcon from './ui/PixelIcon.jsx'

export default function AIToolkit({ profile }) {
  return (
    <Section id="ai-toolkit" index="04" label="AI Workflow" title="MY AI TOOLKIT">
      <p className="text-paper-muted leading-relaxed max-w-2xl mb-8 text-sm">
        {profile.aiFluency.summary}
      </p>
      <div className="grid sm:grid-cols-2 gap-6">
        {profile.aiToolkit.map((item) => (
          <div key={item.tool} className="pixel-card p-6">
            <h3 className="font-pixel text-xs text-magenta mb-4 flex items-center gap-2">
              <PixelIcon type="sparkle" size={12} color="#C147E9" />
              {item.tool.toUpperCase()}
            </h3>
            <dl className="space-y-3 text-sm">
              <div>
                <dt className="eyebrow mb-1">Used for</dt>
                <dd className="text-paper-muted leading-relaxed">{item.usedFor}</dd>
              </div>
              <div>
                <dt className="eyebrow mb-1">Where it fits</dt>
                <dd className="text-paper-muted leading-relaxed">{item.workflowFit}</dd>
              </div>
              <div>
                <dt className="eyebrow mb-1">Why it helps</dt>
                <dd className="text-paper-muted leading-relaxed">{item.benefit}</dd>
              </div>
            </dl>
          </div>
        ))}
      </div>
    </Section>
  )
}
