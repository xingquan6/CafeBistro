import { useAsync } from '../hooks/useAsync'
import { getCoffeeMenu } from '../api/coffee'
import { business } from '../data/business'
import { Hero } from '../components/Hero'
import { Button } from '../components/Button'
import { SectionHeading } from '../components/SectionHeading'
import { CoffeeCard } from '../components/CoffeeCard'
import { QuoteBanner } from '../components/QuoteBanner'
import { CardSkeletonGrid } from '../components/Skeleton'
import { useLanguage } from '../i18n/LanguageContext'

export function Home() {
  const { data: coffees, loading: coffeesLoading } = useAsync(getCoffeeMenu, [])
  const { t } = useLanguage()

  return (
    <>
      <Hero eyebrow={t.pages.home.heroEyebrow} title={business.name} subtitle={t.business.heroSubcopy} />

      <QuoteBanner />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow={t.pages.home.coffeeEyebrow}
          title={t.pages.home.coffeeTitle}
          subtitle={t.pages.home.coffeeSubtitle}
        />
        {coffeesLoading || !coffees ? (
          <CardSkeletonGrid count={6} />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coffees.slice(0, 6).map((item) => (
              <CoffeeCard key={item.id} item={item} />
            ))}
          </div>
        )}
        <div className="mt-10 text-center">
          <Button to="/menu" variant="ghost">{t.buttons.seeFullMenu}</Button>
        </div>
      </section>
    </>
  )
}
