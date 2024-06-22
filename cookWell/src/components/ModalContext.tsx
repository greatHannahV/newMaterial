import React, { createContext, useState, useContext, ReactNode } from 'react'
import { Meal } from '../types'

interface ModalContextType {
  active: boolean
  setActive: React.Dispatch<React.SetStateAction<boolean>>
  recipe: Meal | null
  setRecipe: React.Dispatch<React.SetStateAction<Meal | null>>
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

interface ModalProviderProps {
  children: ReactNode
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [active, setActive] = useState<boolean>(false)
  const [recipe, setRecipe] = useState<Meal | null>(null)
  const [search, setSearch] = useState<string>('')

  return (
    <ModalContext.Provider
      value={{
        search,

        setSearch,
        active,
        setActive,
        recipe,
        setRecipe,
      }}
    >
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
