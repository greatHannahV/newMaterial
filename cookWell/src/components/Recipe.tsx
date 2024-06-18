// import React from 'react'
// import styled from 'styled-components'

// const StyledRecipe = styled.div`
//   box-shadow: 1px 1px 15px -10px rgb(0, 0, 0, 0.8);

//   margin: 10px 0;
//   display: grid;
//   grid-template-rows: 40px 20px 100px 1fr 30px;
//   width: 300px;
// `

// interface Meal {
//   idMeal: string
//   strMeal: string
//   strArea: string
//   [key: string]: string | undefined

//   strMealThumb: string
// }

// interface RecipeProps {
//   recipe: Meal
// }

// const Recipe: React.FC<RecipeProps> = ({ recipe }) => {
//   const ingredients = []
//   for (let i = 1; i <= 20; i++) {
//     const ingredientName = recipe[`strIngredient${i}`]

//     if (ingredientName && ingredientName.trim() !== '') {
//       ingredients.push(ingredientName)
//     } else {
//       // Stop loop when encountering an empty ingredient string
//       break
//     }
//   }
//   return (
//     <>
//       <StyledRecipe>
//         <h2>{recipe.strMeal}</h2>
//         <p>{recipe.strArea}</p>
//         <div className="image">
//           <img src={recipe.strMealThumb} />
//         </div>
//         <ul className="list__ingr ">
//           {ingredients.map((ingredient, index) => (
//             <li key={index}>{ingredient}</li>
//           ))}
//         </ul>
//       </StyledRecipe>
//     </>
//   )
// }

// export default Recipe
import React from 'react'
import styled from 'styled-components'
import { MdOutlineOpenInNew } from 'react-icons/md'

const StyledRecipe = styled.div`
  box-shadow: 1px 1px 15px -10px rgb(0, 0, 0, 0.8);
  margin: 10px 0;
  display: grid;
  grid-template-rows: minmax(50px, 75px) 35px 180px 1fr 50px;
  width: 300px;
`

const StyledImage = styled.div`
  position: relative;
  padding-bottom: 58%;
`
const StyledName = styled.h1`
  font-size: 25px;
  padding: 10px;
  font-family: inherit;
`
const StyledRegion = styled.p`
  font-size: 16px;
  padding: 5px 10px 20px 0;
  color: #888;
  margin-left: 10px;
`
const Button = styled.button`
  border: none;
  background-color: inherit;
  width: 40px;
  height: 40px;
  cursor: pointer;
`

const StyledImageImg = styled.img`
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

interface Meal {
  idMeal: string
  strMeal: string
  strArea: string
  [key: string]: string | undefined
  strMealThumb: string
}

interface RecipeProps {
  recipe: Meal
}

const Recipe: React.FC<RecipeProps> = ({ recipe }) => {
  const ingredients: string[] = []
  for (let i = 1; i <= 20; i++) {
    const ingredientName = recipe[`strIngredient${i}`]
    if (ingredientName && ingredientName.trim() !== '') {
      ingredients.push(ingredientName)
    } else {
      // Stop loop when encountering an empty ingredient string
      break
    }
  }

  return (
    <StyledRecipe>
      <StyledName>{recipe.strMeal}</StyledName>
      <StyledRegion>{recipe.strArea}</StyledRegion>
      <StyledImage>
        <StyledImageImg src={recipe.strMealThumb} alt={recipe.strMeal} />
      </StyledImage>
      <ul className="list__ingr">
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <Button>
        <MdOutlineOpenInNew className="icon" />
      </Button>
    </StyledRecipe>
  )
}

export default Recipe
