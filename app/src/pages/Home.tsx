import { useAsync } from '../hooks/useAsync'
import { getCoffeeMenu } from '../api/coffee'
import { getRecipeMenu } from '../api/recipes'
import { business } from '../data/business'
import { Hero } from '../components/Hero'
import { Button } from '../components/Button'
import { SectionHeading } from '../components/SectionHeading'
import { CoffeeCard } from '../components/CoffeeCard'
import { RecipeCard } from '../components/RecipeCard'
import { QuoteBanner } from '../components/QuoteBanner'
import { CardSkeletonGrid } from '../components/Skeleton'
import HERO_IMAGE from '../assets/images/hero-home.jpg'
import { useLanguage } from '../i18n/LanguageContext'

export function Home() {
  const { data: coffees, loading: coffeesLoading } = useAsync(getCoffeeMenu, [])
  const { data: recipes, loading: recipesLoading } = useAsync(getRecipeMenu, [])
  const { t } = useLanguage()

  return (
    <>
      <Hero image={HERO_IMAGE} eyebrow={t.pages.home.heroEyebrow} title={business.name} subtitle={t.business.heroSubcopy}>
        <Button to="/menu" variant="primary">{t.buttons.viewMenu}</Button>
      </Hero>

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

      <section className="bg-espresso-light/5 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow={t.pages.home.valuesEyebrow} title={t.pages.home.valuesTitle} />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {t.business.values.map((value) => (
              <div key={value.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-display text-lg font-semibold text-espresso">{value.title}</h3>
                <p className="mt-3 text-sm text-espresso-light">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow={t.pages.home.kitchenEyebrow}
          title={t.pages.home.kitchenTitle}
          subtitle={t.pages.home.kitchenSubtitle}
        />
        {recipesLoading || !recipes ? (
          <CardSkeletonGrid count={3} />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recipes.slice(0, 3).map((item) => (
              <RecipeCard key={item.id} item={item} />
            ))}
          </div>
        )}
        <div className="mt-10 text-center">
          <Button to="/recipes" variant="ghost">{t.buttons.seeAllRecipes}</Button>
        </div>
      </section>
    </>
  )
}
