import { useAsync } from '../hooks/useAsync'
import { getRecipeMenu } from '../api/recipes'
import { Hero } from '../components/Hero'
import { SectionHeading } from '../components/SectionHeading'
import { RecipeCard } from '../components/RecipeCard'
import { CardSkeletonGrid } from '../components/Skeleton'
import HERO_IMAGE from '../assets/images/hero-recipes.jpg'
import { useLanguage } from '../i18n/LanguageContext'

export function Recipes() {
  const { data: recipes, loading } = useAsync(getRecipeMenu, [])
  const { t } = useLanguage()

  const categories = recipes ? Array.from(new Set(recipes.map((r) => r.category))) : []

  return (
    <>
      <Hero
        height="half"
        image={HERO_IMAGE}
        eyebrow={t.pages.recipes.heroEyebrow}
        title={t.pages.recipes.heroTitle}
        subtitle={t.pages.recipes.heroSubtitle}
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        {loading || !recipes ? (
          <CardSkeletonGrid count={9} />
        ) : (
          categories.map((category) => (
            <div key={category} className="mb-14">
              <SectionHeading
                eyebrow={t.recipeCategories[category] ?? category}
                title={t.pages.recipes.categoryHeading[category] ?? category}
                align="left"
              />
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {recipes
                  .filter((r) => r.category === category)
                  .map((item) => (
                    <RecipeCard key={item.id} item={item} />
                  ))}
              </div>
            </div>
          ))
        )}
      </section>
    </>
  )
}
