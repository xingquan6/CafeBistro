import { Hero } from '../components/Hero'
import { SectionHeading } from '../components/SectionHeading'
import HERO_IMAGE from '../assets/images/hero-about.jpg'
import STORY_IMAGE from '../assets/images/story-interior.jpg'
import { useLanguage } from '../i18n/LanguageContext'

export function About() {
  const { t } = useLanguage()

  return (
    <>
      <Hero
        height="half"
        image={HERO_IMAGE}
        eyebrow={t.pages.about.heroEyebrow}
        title={t.pages.about.heroTitle}
        subtitle={t.pages.about.heroSubtitle}
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center">
        <img src={STORY_IMAGE} alt={t.pages.about.storyImageAlt} className="rounded-2xl object-cover shadow-sm" />
        <div>
          <SectionHeading eyebrow={t.pages.about.storyEyebrow} title={t.business.story.heading} align="left" />
          <div className="space-y-4 text-espresso-light">
            {t.business.story.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
