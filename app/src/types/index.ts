export interface CoffeeItem {
  id: string
  catalogKey: string
  image: string
  category: 'Hot' | 'Iced'
}

export interface RecipeItem {
  id: string
  title: string
  image: string
  area: string
  category: string
  instructions?: string
  ingredients?: string[]
}
