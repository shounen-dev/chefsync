import { create } from 'zustand'
import { Database } from '@/database.types'

type RecipeIngredients = Database['public']['Tables']['ingredients']['Row'][]
type Ingredient = Database['public']['Tables']['ingredients']['Row']

type CreateRecipe = {
  recipeIngredients: RecipeIngredients
  addIngredient: (ingredient: Ingredient) => void
  removeIngredient: (ingredient: Ingredient) => void
  resetIngredients: () => void
}

const useCreateRecipe = create<CreateRecipe>((set) => ({
  recipeIngredients: [],
  addIngredient: (ingredient) =>
    set((state) => {
      const updatedIngredients = [...state.recipeIngredients]

      if (!updatedIngredients.find((i) => i.id === ingredient.id)) {
        updatedIngredients.push(ingredient)
      }

      return { recipeIngredients: updatedIngredients }
    }),
  removeIngredient: (ingredient) =>
    set((state) => {
      const updatedIngredients = [...state.recipeIngredients]

      const filteredIngredients = updatedIngredients.filter(
        (i) => i.id !== ingredient.id
      )

      return { recipeIngredients: filteredIngredients }
    }),
  resetIngredients: () =>
    set({
      recipeIngredients: [],
    }),
}))

export default useCreateRecipe
