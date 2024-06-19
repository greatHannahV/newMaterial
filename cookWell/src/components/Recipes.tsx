// import React from 'react'
// import styled from 'styled-components'
// import Recipe from './Recipe'
// import { Meal } from '../types'

// const StyledRecipes = styled.div`
//   margin: 0 auto;
//   width: 1300px;
//   height: 100%;
//   grid-row: 2/3;
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   column-gap: 25px;
//   justify-content: space-between;
// `

// interface RecipesProps {
//   recipe: { meals: Meal[] }
// }

// const Recipes: React.FC<RecipesProps> = ({ active, toActive, recipe }) => {
//   return (
//     <StyledRecipes>
//       {recipe.meals.map((meal: Meal) => (
//         <Recipe
//           active={active}
//           toActive={toActive}
//           key={meal.idMeal}
//           recipe={meal}
//         />
//       ))}
//     </StyledRecipes>
//   )
// }

// export default Recipes
import React from 'react'
import styled from 'styled-components'
import Recipe from './Recipe'
import { Meal } from '../types'

const StyledRecipes = styled.div`
  margin: 0 auto;
  width: 1300px;
  height: 100%;
  grid-row: 2/3;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  column-gap: 25px;
  justify-content: space-between;
`

interface RecipesProps {
  recipes: Meal[]
}

const Recipes: React.FC<RecipesProps> = ({ recipes }) => {
  return (
    <StyledRecipes>
      {recipes.map((meal) => (
        <Recipe key={meal.idMeal} recipe={meal} />
      ))}
    </StyledRecipes>
  )
}

export default Recipes
