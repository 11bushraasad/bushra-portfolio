import PixelIcon from './PixelIcon.jsx'

export default function Section({ id, index, label, title, children, className = '' }) {
  return (
    <section id={id} className={`relative py-20 md:py-28 px-6 md:px-10 scroll-mt-20 ${className}`}>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <PixelIcon type="star" size={14} color="#FF5FB4" />
          <span className="eyebrow">
            {index} · {label}
          </span>
        </div>
        {title && (
          <h2 className="font-pixel text-xl md:text-2xl leading-relaxed text-paper mb-10 max-w-2xl">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  )
}
