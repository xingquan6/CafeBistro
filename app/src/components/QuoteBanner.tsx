import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

export function QuoteBanner() {
  const { t } = useLanguage()
  const [index] = useState(() => Math.floor(Math.random() * t.quotes.length))
  const quote = t.quotes[index]

  return (
    <section className="bg-cream-dark">
      <div className="mx-auto max-w-3xl px-6 py-16 text-center">
        <p className="font-display text-2xl italic text-espresso sm:text-3xl">“{quote.text}”</p>
        <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-rust">— {quote.author}</p>
      </div>
    </section>
  )
}
