import React, { useEffect, useState } from 'react'
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
  max-height: 700px;
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
  const [completeRecipe, setCompleteRecipe] = useState<Meal | null>(recipe)

  const ingredients: string[] = []

  for (let i = 1; i <= 20; i++) {
    const ingredientName = completeRecipe?.[`strIngredient${i}`]
    const ingredientMeasure = completeRecipe?.[`strMeasure${i}`]

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

  useEffect(() => {
    async function fetchSameRecipeWithIngredients() {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe.strMeal}`,
        )
        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`)
        }
        const result = await response.json()
        if (result.meals && result.meals[0]) {
          setCompleteRecipe(result.meals[0])
        }
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error)
      }
    }

    if (ingredients.length === 0) {
      fetchSameRecipeWithIngredients()
    }
  }, [ingredients.length, recipe.strMeal])
  const handleClick = () => {
    setRecipe(completeRecipe)
    setActive(!active)
  }
  return (
    <StyledRecipe>
      <StyledName>{completeRecipe?.strMeal}</StyledName>
      <StyledRegion>{completeRecipe?.strArea}</StyledRegion>
      <StyledImage>
        <StyledImageImg
          src={completeRecipe?.strMealThumb}
          alt={completeRecipe?.strMeal}
        />
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
