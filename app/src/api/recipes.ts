import type { RecipeItem } from '../types'
import bananaBreadImg from '../assets/images/recipe-banana-bread.jpg'
import aebleskiverImg from '../assets/images/recipe-aebleskiver.jpg'
import alfajoresImg from '../assets/images/recipe-alfajores.jpg'
import anzacBiscuitsImg from '../assets/images/recipe-anzac-biscuits.jpg'
import apamBalikImg from '../assets/images/recipe-apam-balik.jpg'
import appleBlackberryCrumbleImg from '../assets/images/recipe-apple-blackberry-crumble.jpg'
import appleCakeImg from '../assets/images/recipe-apple-cake.jpg'
import appleFrangipanTartImg from '../assets/images/recipe-apple-frangipan-tart.jpg'
import apricotTurkishDelightMessImg from '../assets/images/recipe-apricot-turkish-delight-mess.jpg'

const FILTER_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php'
const LOOKUP_URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php'

const CATEGORIES: RecipeItem['category'][] = ['Dessert']
const RECIPES_PER_CATEGORY = 8

// Self-hosted copies of the current top Dessert recipes' photos, keyed by
// TheMealDB's recipe id, so the listing doesn't depend on their CDN staying
// up. If their Dessert category ever returns a recipe we haven't downloaded,
// fetchCategory falls back to that recipe's own live thumbnail below.
const RECIPE_IMAGES: Record<string, string> = {
  '53120': aebleskiverImg,
  '53138': alfajoresImg,
  '53111': anzacBiscuitsImg,
  '53049': apamBalikImg,
  '52893': appleBlackberryCrumbleImg,
  '53380': appleCakeImg,
  '52768': appleFrangipanTartImg,
  '53276': apricotTurkishDelightMessImg,
}

// Sentinel for our own curated listings (not sourced from the recipe API),
// so the UI can translate it instead of rendering literal English text.
export const BISTRO_KITCHEN_AREA = 'bistro-kitchen'

interface RawFilterMeal {
  idMeal: string
  strMeal: string
  strMealThumb: string
}

interface RawFullMeal extends RawFilterMeal {
  strArea: string
  strCategory: string
  strInstructions: string
  [key: string]: string | null
}

const FALLBACK_RECIPES: RecipeItem[] = [
  {
    id: 'fallback-banana-bread',
    title: 'Banana Bread',
    image: bananaBreadImg,
    area: BISTRO_KITCHEN_AREA,
    category: 'Dessert',
  },
]

function extractIngredients(meal: RawFullMeal): string[] {
  const ingredients: string[] = []
  for (let i = 1; i <= 20; i += 1) {
    const ingredient = meal[`strIngredient${i}`]
    if (ingredient && ingredient.trim()) ingredients.push(ingredient.trim())
  }
  return ingredients
}

async function fetchCategory(category: string): Promise<RecipeItem[]> {
  const res = await fetch(`${FILTER_URL}?c=${category}`)
  if (!res.ok) throw new Error(`Recipe API responded ${res.status}`)
  const data: { meals: RawFilterMeal[] | null } = await res.json()
  if (!data.meals) return []
  return data.meals.slice(0, RECIPES_PER_CATEGORY).map((meal) => ({
    id: meal.idMeal,
    title: meal.strMeal,
    image: RECIPE_IMAGES[meal.idMeal] ?? meal.strMealThumb,
    area: BISTRO_KITCHEN_AREA,
    category,
  }))
}

export async function getRecipeMenu(): Promise<RecipeItem[]> {
  try {
    const results = await Promise.all(CATEGORIES.map(fetchCategory))
    const combined = results.flat()
    return combined.length ? combined : FALLBACK_RECIPES
  } catch {
    return FALLBACK_RECIPES
  }
}

export async function getRecipeDetail(id: string): Promise<RecipeItem | null> {
  try {
    const res = await fetch(`${LOOKUP_URL}?i=${id}`)
    if (!res.ok) throw new Error(`Recipe API responded ${res.status}`)
    const data: { meals: RawFullMeal[] | null } = await res.json()
    const meal = data.meals?.[0]
    if (!meal) return null
    return {
      id: meal.idMeal,
      title: meal.strMeal,
      image: RECIPE_IMAGES[meal.idMeal] ?? meal.strMealThumb,
      area: meal.strArea,
      category: meal.strCategory,
      instructions: meal.strInstructions,
      ingredients: extractIngredients(meal),
    }
  } catch {
    return null
  }
}
