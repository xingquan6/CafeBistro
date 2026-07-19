import { Hero } from '../components/Hero'
import { SectionHeading } from '../components/SectionHeading'
import { useLanguage } from '../i18n/LanguageContext'

export function About() {
  const { t } = useLanguage()

  return (
    <>
      <Hero
        height="half"
        eyebrow={t.pages.about.heroEyebrow}
        title={t.pages.about.heroTitle}
        subtitle={t.pages.about.heroSubtitle}
      />

      <section className="mx-auto max-w-3xl px-6 py-20">
        <SectionHeading eyebrow={t.pages.about.historyEyebrow} title={t.pages.about.historyTitle} align="left" />
        <div className="space-y-10">
          {t.pages.about.history.map((item) => (
            <div key={item.title} className="border-l-2 border-gold/40 pl-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-gold">{item.era}</p>
              <h3 className="mt-1 font-display text-lg font-semibold text-espresso">{item.title}</h3>
              <p className="mt-2 text-espresso-light">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
