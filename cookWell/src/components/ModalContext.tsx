import React, { createContext, useState, useContext, ReactNode } from 'react'
import { Meal } from '../types'

interface ModalContextType {
  active: boolean
  setActive: React.Dispatch<React.SetStateAction<boolean>>
  recipe: Meal | null
  setRecipe: React.Dispatch<React.SetStateAction<Meal | null>>
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

interface ModalProviderProps {
  children: ReactNode
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [active, setActive] = useState<boolean>(false)
  const [recipe, setRecipe] = useState<Meal | null>(null)

  return (
    <ModalContext.Provider value={{ active, setActive, recipe, setRecipe }}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
}
