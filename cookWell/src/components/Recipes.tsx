import React from 'react'
import styled from 'styled-components'
import Recipe from './Recipe'

const StyledRecipes = styled.div`
  margin: 0 auto;
  width: 1300px;
  height: 100%;
  grid-row: 2/3;
  display: grid;
  grid-template-columns: repeat(4, 300px);
  column-gap: 25px;
  justify-content: space-between;
`

interface Meal {
  idMeal: string
  strMeal: string
  strArea: string
  [key: string]: string | undefined

  strMealThumb: string
}

interface RecipesProps {
  recipe: { meals: Meal[] }
}

const Recipes: React.FC<RecipesProps> = ({ recipe }) => {
  return (
    <StyledRecipes>
      {recipe.meals.map((meal: Meal) => (
        <Recipe key={meal.idMeal} recipe={meal} />
      ))}
    </StyledRecipes>
  )
}

export default Recipes
