interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'center' | 'left'
}

export function SectionHeading({ eyebrow, title, subtitle, align = 'center' }: SectionHeadingProps) {
  const alignClasses = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`max-w-2xl ${alignClasses} mb-10`}>
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-rust">{eyebrow}</p>
      )}
      <h2 className="text-3xl font-semibold text-espresso sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base text-espresso-light">{subtitle}</p>}
    </div>
  )
}
