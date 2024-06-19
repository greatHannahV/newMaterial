export interface Meal {
  idMeal: string
  strMeal: string
  strArea: string
  strMealThumb: string
  [key: string]: string | undefined
}

export interface RecipeProps {
  recipe: Meal
}
