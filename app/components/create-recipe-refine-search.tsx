import React from 'react'
import { Database } from '@/database.types'
import CreateResipeSelectIngredients from './create-resipe-select-ingredients'

type Props = {
  selectedCategory: string
  ingredients: Database['public']['Tables']['ingredients']['Row'][] | null
}

export default function CreateRecipeRefineSearch({
  selectedCategory,
  ingredients,
}: Props) {
  let searched
  if (!selectedCategory || selectedCategory === '全て') {
    searched = ingredients
  } else {
    searched = ingredients?.filter((i) => i.category === selectedCategory)
  }

  return (
    <>
      {searched?.map((i) => (
        <CreateResipeSelectIngredients key={i.id} {...i} />
      ))}
    </>
  )
}
