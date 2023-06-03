'use client'
import React from 'react'
import { Database } from '@/database.types'
import useCreateRecipe from '@/store/recipe'
import { isDebuggerStatement } from 'typescript'

export default function CreateResipeSelectIngredients(
  ingredient: Database['public']['Tables']['ingredients']['Row']
) {
  const {
    recipeIngredients: selected,
    addIngredient: add,
    removeIngredient: remove,
  } = useCreateRecipe()

  const ids = selected.map((i) => i.id)

  const handleAdd = () => {
    add(ingredient)
  }
  const handleRemove = () => {
    remove(ingredient)
  }

  return (
    <div
      className={`${
        ids.includes(ingredient.id)
          ? 'flex justify-between w-full bg-slate-100 hover:bg-slate-200'
          : 'flex justify-between w-full hover:bg-slate-200'
      }`}
    >
      <p>{ingredient.title}</p>
      <p>{ingredient.price}</p>
      <button onClick={handleAdd}>add</button>
      <button onClick={handleRemove}>remove</button>
    </div>
  )
}
