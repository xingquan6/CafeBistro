import type { ReactNode } from 'react'

interface HeroProps {
  image?: string
  eyebrow?: string
  title: string
  subtitle?: string
  children?: ReactNode
  height?: 'full' | 'half'
}

export function Hero({ image, eyebrow, title, subtitle, children, height = 'full' }: HeroProps) {
  // Without a background photo there's nothing that needs filling the
  // viewport — just size to the content plus its own padding below.
  const heightClass = !image ? '' : height === 'full' ? 'min-h-[85vh]' : 'min-h-[50vh]'

  return (
    <section
      className={`relative flex ${heightClass} items-center ${image ? 'bg-cover bg-center' : 'bg-espresso'}`}
      style={image ? { backgroundImage: `url(${image})` } : undefined}
    >
      {image && <div className="absolute inset-0 bg-gradient-to-r from-espresso/85 via-espresso/50 to-espresso/10" />}
      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-xl text-cream">
          {eyebrow && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-gold">{eyebrow}</p>
          )}
          <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">{title}</h1>
          {subtitle && <p className="mt-5 text-lg text-cream/90">{subtitle}</p>}
          {children && <div className="mt-8 flex flex-wrap gap-4">{children}</div>}
        </div>
      </div>
    </section>
  )
}
