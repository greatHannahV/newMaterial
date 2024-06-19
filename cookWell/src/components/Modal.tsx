// import styled from 'styled-components'

// const ModalStyle = styled.div`
//   opacity: 0;
//   visibility: hidden;
// `
// const ModalContent = styled.div`
//   background-color: #ffff;
//   width: 800px;
//   height: 500px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `

// const ModalBody = styled.p`
//   font-size: 24px;
// `

// function Modal() {
//   return (
//     <ModalStyle className="modal">
//       <ModalContent>
//         <ModalBody>ffff</ModalBody>
//       </ModalContent>
//     </ModalStyle>
//   )
// }

// export default Modal
import React from 'react'
import styled from 'styled-components'
import { useModal } from '../components/ModalContext'
import { Meal } from '../types'

const ModalStyle = styled.div`
  opacity: 0;
  visibility: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  &.active {
    opacity: 1;
    visibility: visible;
    position: fixed;
  }
`

const ModalContent = styled.div`
  background-color: #ffffff;
  max-width: 1000px;
  max-height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 10px;
  margin: 10px;
`

const ModalBody = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  padding: 30px;
`

const ModalButton = styled.button`
  font-size: 30px;
  position: absolute;
  top: 5px;
  right: 10px;
  width: 20px;
  height: 20px;
  color: red;
  background-color: transparent;
  border: none;
  cursor: pointer;

  text-align: inherit;
  font-family: inherit;
  border-radius: 0;
  appearance: none;
`

interface ModalProps {
  recipe: Meal | null
}

const Modal: React.FC<ModalProps> = () => {
  const { setActive, active, recipe } = useModal()

  if (!recipe) return null

  return (
    <ModalStyle className="modal active">
      <ModalContent>
        <ModalBody className="modalbody">
          <p>{recipe?.strInstructions}</p>
        </ModalBody>
        <ModalButton onClick={() => setActive(!active)}>X</ModalButton>
      </ModalContent>
    </ModalStyle>
  )
}

export default Modal
