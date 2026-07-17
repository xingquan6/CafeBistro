import { useParams } from 'react-router-dom'
import { useAsync } from '../hooks/useAsync'
import { getRecipeDetail } from '../api/recipes'
import { Button } from '../components/Button'
import { handleImageError } from '../lib/imageFallback'
import { useLanguage } from '../i18n/LanguageContext'

export function RecipeDetail() {
  const { id } = useParams<{ id: string }>()
  const { data: recipe, loading } = useAsync(() => getRecipeDetail(id ?? ''), [id])
  const { t } = useLanguage()

  if (loading) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-24">
        <div className="h-72 w-full animate-pulse rounded-2xl bg-espresso/10" />
        <div className="mt-6 h-8 w-1/2 animate-pulse rounded bg-espresso/10" />
      </div>
    )
  }

  if (!recipe) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="font-display text-3xl font-semibold text-espresso">{t.pages.recipeDetail.notFoundTitle}</h1>
        <p className="mt-3 text-espresso-light">{t.pages.recipeDetail.notFoundBody}</p>
        <div className="mt-6">
          <Button to="/recipes" variant="ghost">{t.buttons.backToRecipesPlain}</Button>
        </div>
      </div>
    )
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Button to="/recipes" variant="ghost" className="mb-8">{t.buttons.backToRecipes}</Button>
      <img
        src={recipe.image}
        alt={recipe.title}
        onError={handleImageError}
        className="h-80 w-full rounded-2xl object-cover"
      />
      <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-rust">
        {t.recipeCategories[recipe.category] ?? recipe.category} · {recipe.area}
      </p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-espresso sm:text-4xl">{recipe.title}</h1>

      {recipe.ingredients && recipe.ingredients.length > 0 && (
        <div className="mt-8">
          <h2 className="font-display text-xl font-semibold text-espresso">{t.pages.recipeDetail.ingredients}</h2>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient} className="text-sm text-espresso-light">· {ingredient}</li>
            ))}
          </ul>
        </div>
      )}

      {recipe.instructions && (
        <div className="mt-8">
          <h2 className="font-display text-xl font-semibold text-espresso">{t.pages.recipeDetail.method}</h2>
          <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-espresso-light">
            {recipe.instructions}
          </p>
        </div>
      )}
    </article>
  )
}
