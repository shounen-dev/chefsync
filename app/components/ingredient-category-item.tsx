'use client'
import supabase from '@/utils/supabase'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function IngredientCategoryItem({
  id,
  title,
}: {
  id: string
  title: string
}) {
  const [editedTitle, setEditedTitle] = useState(title)
  const newTitle = {
    title: editedTitle,
  }
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTitle(e.target.value)
  }

  const handleBlur = async () => {
    const { error } = await supabase
      .from('categories')
      .update(newTitle)
      .eq('id', id)
    if (error) {
      console.log('updata error:', error.message)
    } else {
      router.refresh()
    }
  }

  return (
    <input
      className=""
      value={editedTitle}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  )
}
