// import { useEffect, useState } from 'react'
// import Header from './components/Header'
// import Recipes from './components/Recipes'
// import Footer from './components/Footer'
// import styled from 'styled-components'

// import { Meal } from './types'
// import Modal from './components/Modal'
// //https://www.themealdb.com/api.php
// //https://imgur.com/a/FtGEJLz
// const WrapperStyle = styled.div`
//   height: 100vh;
//   width: 100%;
//   display: grid;
//   margin: 0 auto;
//   grid-template-rows: minmax(auto, 4rem) 1fr minmax(100px, 200px);
//   position: relative;
//   overflow-y: auto;
//   overflow-x: hidden;
// `
// function App() {
//   const [recipe, setRecipe] = useState<{ meals: Meal[] } | null>(null)
//   const [active, setActive] = useState<boolean>(false)
//   useEffect(() => {
//     if (active) {
//       document.querySelector('.modal')?.classList.toggle('active')
//     }
//   }, [active])
//   async function getRecipe() {
//     try {
//       const response = await fetch(
//         'https://www.themealdb.com/api/json/v1/1/search.php?s=soup',
//       )
//       if (!response.ok) {
//         throw new Error(`Error! status: ${response.status}`)
//       }
//       const result = await response.json()
//       setRecipe(result)
//       console.log(result)
//     } catch (error) {
//       console.error('There was a problem with the fetch operation:', error)
//     }
//   }

//   useEffect(() => {
//     getRecipe()
//   }, [])
//   return (
//     <WrapperStyle>
//       {active ? <Modal /> : null}
//       <Header />
//       <div>
//         {recipe ? (
//           <Recipes active={active} toActive={setActive} recipe={recipe} />
//         ) : (
//           <p>Nothing was found</p>
//         )}
//       </div>
//       <Footer />
//     </WrapperStyle>
//   )
// }

// export default App
import { useEffect, useState } from 'react'
import Header from './components/Header'
import Recipes from './components/Recipes'
import Footer from './components/Footer'
import { ModalProvider, useModal } from './components/ModalContext'
import styled from 'styled-components'

import { Meal } from './types'
import Modal from './components/Modal'

const WrapperStyle = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  margin: 0 auto;
  grid-template-rows: minmax(auto, 4rem) 1fr minmax(100px, 200px);
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
`

function AppContent() {
  const [recipes, setRecipes] = useState<{ meals: Meal[] } | null>(null)
  const { active, recipe } = useModal()

  async function getRecipe() {
    try {
      const response = await fetch(
        'https://www.themealdb.com/api/json/v1/1/search.php?s=soup',
      )
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`)
      }
      const result = await response.json()
      setRecipes(result)
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
        {recipes ? (
          <Recipes recipes={recipes.meals} />
        ) : (
          <p>Nothing was found</p>
        )}
      </div>
      <Footer />
      {active && <Modal recipe={recipe} />}
    </WrapperStyle>
  )
}

function App() {
  return (
    <ModalProvider>
      <AppContent />
    </ModalProvider>
  )
}

export default App
