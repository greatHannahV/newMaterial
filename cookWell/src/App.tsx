import { useEffect, useState } from 'react'
import Header from './components/Header'
import Recipes from './components/Recipes'
import Footer from './components/Footer'
import styled from 'styled-components'

//https://www.themealdb.com/api.php
//https://imgur.com/a/FtGEJLz
interface Meal {
  idMeal: string
  strMeal: string
  strArea: string
  [key: string]: string | undefined

  strMealThumb: string

  // Add more properties here as needed
}
const WrapperStyle = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  margin: 0 auto;
  grid-template-rows: minmax(auto, 4rem) 1fr minmax(100px, 200px);
`
function App() {
  const [recipe, setRecipe] = useState<{ meals: Meal[] } | null>(null)

  async function getRecipe() {
    try {
      const response = await fetch(
        'https://www.themealdb.com/api/json/v1/1/search.php?s=soup',
      )
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`)
      }
      const result = await response.json()
      setRecipe(result)
      console.log(result)
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error)
    }
  }

  useEffect(() => {
    getRecipe()
  }, [])
  return (
    <WrapperStyle>
      <Header />
      <div>
        {recipe ? <Recipes recipe={recipe} /> : <p>Nothing was found</p>}
      </div>
      <Footer />
    </WrapperStyle>
  )
}

export default App
