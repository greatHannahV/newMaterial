// // import React from 'react'
// // import styled from 'styled-components'

// // const StyledRecipe = styled.div`
// //   box-shadow: 1px 1px 15px -10px rgb(0, 0, 0, 0.8);

// //   margin: 10px 0;
// //   display: grid;
// //   grid-template-rows: 40px 20px 100px 1fr 30px;
// //   width: 300px;
// // `

// // interface Meal {
// //   idMeal: string
// //   strMeal: string
// //   strArea: string
// //   [key: string]: string | undefined

// //   strMealThumb: string
// // }

// // interface RecipeProps {
// //   recipe: Meal
// // }

// // const Recipe: React.FC<RecipeProps> = ({ recipe }) => {
// //   const ingredients = []
// //   for (let i = 1; i <= 20; i++) {
// //     const ingredientName = recipe[`strIngredient${i}`]

// //     if (ingredientName && ingredientName.trim() !== '') {
// //       ingredients.push(ingredientName)
// //     } else {
// //       // Stop loop when encountering an empty ingredient string
// //       break
// //     }
// //   }
// //   return (
// //     <>
// //       <StyledRecipe>
// //         <h2>{recipe.strMeal}</h2>
// //         <p>{recipe.strArea}</p>
// //         <div className="image">
// //           <img src={recipe.strMealThumb} />
// //         </div>
// //         <ul className="list__ingr ">
// //           {ingredients.map((ingredient, index) => (
// //             <li key={index}>{ingredient}</li>
// //           ))}
// //         </ul>
// //       </StyledRecipe>
// //     </>
// //   )
// // }

// // export default Recipe
// import React, { useState } from 'react'
// import styled from 'styled-components'
// import { MdOutlineOpenInNew } from 'react-icons/md'
// import { Meal } from '../types'
// import Modal from './Modal'

// const StyledRecipe = styled.div`
//   box-shadow: 1px 1px 15px -10px rgb(0, 0, 0, 0.8);
//   margin: 10px 0;
//   display: grid;
//   /* grid-template-rows: 60px 35px 180px 1fr 50px; */
//   grid-auto-flow: row;
//   grid-template:
//     minmax(50px, auto) minmax(40px, auto) auto 1fr minmax(40px, auto)
//     / 1fr;
//   position: relative;
// `

// const StyledImage = styled.div`
//   position: relative;
//   padding-bottom: 58%;
// `
// const StyledName = styled.h1`
//   font-size: 25px;
//   padding: 5px 10px;
//   font-family: inherit;
// `
// const StyledRegion = styled.p`
//   font-size: 16px;
//   padding: 5px 10px;

//   color: #888;
// `
// const Button = styled.button`
//   border: none;
//   background-color: inherit;
//   width: 40px;
//   height: 40px;
//   cursor: pointer;
//   position: absolute;
//   bottom: 12px;
//   left: 15px;
// `

// const StyledImageImg = styled.img`
//   object-fit: cover;
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
// `

// interface RecipeProps {
//   recipe: Meal
// }

// const Recipe: React.FC<RecipeProps> = ({ active, toActive, recipe }) => {
//   const ingredients: string[] = []
//   for (let i = 1; i <= 20; i++) {
//     const ingredientName = recipe[`strIngredient${i}`]
//     if (ingredientName && ingredientName.trim() !== '') {
//       ingredients.push(ingredientName)
//     } else {
//       // Stop loop when encountering an empty ingredient string
//       break
//     }
//   }
//   const handleClick = () => {
//     toActive(!active)
//     document.querySelector('.modal')?.classList.toggle('active')
//     console.log('click')
//   }
//   return (
//     <StyledRecipe>
//       <StyledName>{recipe.strMeal}</StyledName>
//       <StyledRegion>{recipe.strArea}</StyledRegion>
//       <StyledImage>
//         <StyledImageImg src={recipe.strMealThumb} alt={recipe.strMeal} />
//       </StyledImage>
//       <ul className="list__ingr">
//         {ingredients.map((ingredient, index) => (
//           <li key={index}>{ingredient}</li>
//         ))}
//       </ul>

//       <Button onClick={handleClick}>
//         <MdOutlineOpenInNew className="icon" />
//       </Button>
//     </StyledRecipe>
//   )
// }

// export default Recipe
import React from 'react'
import styled from 'styled-components'
import { MdOutlineOpenInNew } from 'react-icons/md'
import { Meal } from '../types'
import { useModal } from '../components/ModalContext'

const StyledRecipe = styled.div`
  box-shadow: 1px 1px 15px -10px rgb(0, 0, 0, 0.8);
  margin: 10px 0;
  display: grid;
  grid-auto-flow: row;
  grid-template:
    minmax(50px, auto) minmax(40px, auto) auto 1fr minmax(50px, auto)
    / 1fr;
  position: relative;
`

const StyledImage = styled.div`
  position: relative;
  padding-bottom: 58%;
`

const StyledName = styled.h1`
  font-size: 25px;
  padding: 5px 10px;
  font-family: inherit;
`

const StyledRegion = styled.p`
  font-size: 16px;
  padding: 5px 10px;
  color: #888;
`

const Button = styled.button`
  border: none;
  background-color: inherit;
  width: 40px;
  height: 40px;
  cursor: pointer;
  position: absolute;
  bottom: 12px;
  left: 15px;
`

const StyledImageImg = styled.img`
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

interface RecipeProps {
  recipe: Meal
}

const Recipe: React.FC<RecipeProps> = ({ recipe }) => {
  const { setActive, setRecipe, active } = useModal()

  const handleClick = () => {
    setRecipe(recipe)
    setActive(!active)
  }

  const ingredients: string[] = []

  for (let i = 1; i <= 20; i++) {
    const ingredientName = recipe[`strIngredient${i}`]
    const ingredientMeasure = recipe[`strMeasure${i}`]

    if (
      ingredientName &&
      ingredientName.trim() !== '' &&
      ingredientMeasure &&
      ingredientMeasure.trim() !== ''
    ) {
      ingredients.push(`(${ingredientMeasure.trim()}) ${ingredientName.trim()}`)
    } else {
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
      <Button onClick={handleClick}>
        <MdOutlineOpenInNew className="icon" />
      </Button>
    </StyledRecipe>
  )
}

export default Recipe
