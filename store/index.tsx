import { create } from 'zustand'
import { Database } from '@/database.types'

type Ingredient = Database['public']['Tables']['ingredients']['Insert']

type ingredientObj = {
  fieldName: keyof Ingredient
  value: string | number | undefined
}

type IngredientCategory = Database['public']['Tables']['categories']['Row'][]

type CreateIngredient = {
  ingredient: Ingredient
  updateIngredient: (payload: ingredientObj) => void
  resetIngredient: () => void
  ingredientCategory: IngredientCategory
  updateIngredientCategory: (payload: IngredientCategory) => void
}

type EditedIngredient = {
  id: string
  price: number | null
  quantity: number | null
  salt: number | null
  title: string | null
}

type LoginUser = {
  id: string | undefined
  email: string | undefined
}
type State = {
  editedIngredient: EditedIngredient
  updateEditedIngredient: (payload: EditedIngredient) => void
  resetEditedIngredient: () => void
  loginUser: LoginUser
  updateLoginUser: (payload: LoginUser) => void
  resetLoginUser: () => void
}

const useStore = create<State>((set) => ({
  editedIngredient: {
    id: '',
    price: null,
    quantity: null,
    salt: null,
    title: '',
  },
  updateEditedIngredient: (payload) =>
    set({
      editedIngredient: payload,
    }),
  resetEditedIngredient: () =>
    set({
      editedIngredient: {
        id: '',
        price: null,
        quantity: null,
        salt: null,
        title: '',
      },
    }),
  loginUser: {
    id: '',
    email: '',
  },
  updateLoginUser: (payload) =>
    set({
      loginUser: payload,
    }),
  resetLoginUser: () =>
    set({
      loginUser: {
        id: '',
        email: '',
      },
    }),
}))

const useCreateIngredient = create<CreateIngredient>((set) => ({
  ingredient: {
    category: '',
    lot_size: '',
    lot_unit: '',
    price: 0,
    quantity: 0,
    salt: undefined,
    supplier: undefined,
    title: '',
    unit: '',
    user_id: '',
  },
  updateIngredient: (payload: ingredientObj) =>
    set((state) => ({
      ...state,
      ingredient: { ...state.ingredient, [payload.fieldName]: payload.value },
    })),
  resetIngredient: () =>
    set({
      ingredient: {
        category: '',
        lot_size: '',
        lot_unit: '',
        price: 0,
        quantity: 0,
        salt: undefined,
        supplier: undefined,
        title: '',
        unit: '',
        user_id: '',
      },
    }),
  ingredientCategory: [
    {
      created_at: '',
      id: '',
      title: '',
      user_id: '',
    },
  ],
  updateIngredientCategory: (payload: IngredientCategory) =>
    set({
      ingredientCategory: payload,
    }),
}))

export { useCreateIngredient }
export default useStore
