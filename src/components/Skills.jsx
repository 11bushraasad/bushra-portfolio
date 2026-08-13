import Section from './ui/Section.jsx'
import Tag from './ui/Tag.jsx'
import PixelIcon from './ui/PixelIcon.jsx'

export default function Skills({ profile }) {
  const categories = Object.entries(profile.skills)

  return (
    <Section id="skills" index="02" label="Skills" title="WHAT I BRING">
      <div className="grid sm:grid-cols-2 gap-6">
        {categories.map(([category, items]) => (
          <div key={category} className="pixel-card p-5">
            <h3 className="font-pixel text-xs text-pink mb-4 flex items-center gap-2">
              <PixelIcon type="star" size={12} color="#FF5FB4" />
              {category.toUpperCase()}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
