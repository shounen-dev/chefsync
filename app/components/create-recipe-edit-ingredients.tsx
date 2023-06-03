'use client'
import React from 'react'
import useCreateRecipe from '@/store/recipe'
import { useRouter } from 'next/navigation'

export default function CreateRecipeEditIngredients() {
  const { recipeIngredients: ingredients, removeIngredient: remove } =
    useCreateRecipe()
  const router = useRouter()

  const moveUp = (index: number) => {
    if (index === 0) return // Already at top
    const temp = ingredients[index]
    ingredients[index] = ingredients[index - 1]
    ingredients[index - 1] = temp
    router.refresh()
  }

  const moveDown = (index: number) => {
    if (index === ingredients.length - 1) return // Already at bottom
    const temp = ingredients[index]
    ingredients[index] = ingredients[index + 1]
    ingredients[index + 1] = temp
    router.refresh()
  }

  return (
    <div className="flex flex-col items-center">
      {ingredients.map((i, index) => (
        <div key={i.id} className="flex justify-around w-full">
          <p>{i.title}</p>
          <button onClick={() => moveUp(index)}>up</button>
          <button onClick={() => moveDown(index)}>down</button>
          <button onClick={() => remove(i)}>remove</button>
        </div>
      ))}
    </div>
  )
}
