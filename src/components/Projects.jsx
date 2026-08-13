import Section from './ui/Section.jsx'
import Tag from './ui/Tag.jsx'
import PixelIcon from './ui/PixelIcon.jsx'

function ProjectCard({ project }) {
  return (
    <article className={`pixel-card p-6 flex flex-col gap-4 ${project.featured ? 'sm:col-span-2' : ''}`}>
      <div>
        <div className="flex items-center gap-2 mb-2">
          <PixelIcon type="heart" size={14} color="#FF5FB4" />
          <h3 className="font-pixel text-sm text-paper">{project.name}</h3>
        </div>
        <p className="text-paper-muted text-sm leading-relaxed">{project.description}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.tools.map((tool) => (
          <Tag key={tool}>{tool}</Tag>
        ))}
      </div>

      <dl className="grid gap-3 text-sm border-t-2 border-ink-line pt-4">
        <div>
          <dt className="eyebrow mb-1">Role</dt>
          <dd className="text-paper-muted">{project.role}</dd>
        </div>
        <div>
          <dt className="eyebrow mb-1">Problem</dt>
          <dd className="text-paper-muted leading-relaxed">{project.problem}</dd>
        </div>
        <div>
          <dt className="eyebrow mb-1">Solution</dt>
          <dd className="text-paper-muted leading-relaxed">{project.solution}</dd>
        </div>
        <div>
          <dt className="eyebrow mb-1">Outcome</dt>
          <dd className="text-paper-muted leading-relaxed">{project.outcome}</dd>
        </div>
      </dl>

      {project.link ? (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="pixel-btn mt-auto bg-pink text-ink text-[10px] px-4 py-2.5 w-fit"
        >
          VIEW PROJECT
        </a>
      ) : (
        <span className="mt-auto font-mono text-xs text-paper-muted/60 w-fit">
          [ project link not added yet ]
        </span>
      )}
    </article>
  )
}

export default function Projects({ profile }) {
  return (
    <Section id="projects" index="03" label="Selected Work" title="PROJECTS">
      <div className="grid sm:grid-cols-2 gap-6">
        {profile.projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </Section>
  )
}
