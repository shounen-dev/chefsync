'use client'
import { useCreateIngredient } from '@/store'
import supabase from '@/utils/supabase'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function UpdateIngredientCategory({
  id,
  category,
}: {
  id: string
  category: string
}) {
  const [editedCategory, setEditedCategory] = useState(category)
  const { ingredientCategory } = useCreateIngredient()
  const categories = ingredientCategory.map((i) => i.title)
  const router = useRouter()

  //食材種別のプルダウン関連
  if (categories.length === 0) {
    categories.push(category)
  } else if (categories.length > 0 && !category) {
    categories.unshift('')
  } else if (!categories.includes(category)) {
    categories.unshift(category)
  }

  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEditedCategory(e.target.value)
  }

  const updateCategory = async () => {
    const { error } = await supabase
      .from('ingredients')
      .update({ category: editedCategory })
      .eq('id', id)
    if (error) {
      console.log('update category error', error.message)
    } else {
      router.refresh()
    }
  }

  useEffect(() => {
    updateCategory()
    // ESlintの注意を無視
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editedCategory])

  return (
    <select value={editedCategory} onChange={handleChange}>
      {categories.map((i, index) => (
        <option key={index} value={i}>
          {i}
        </option>
      ))}
    </select>
  )
}
