'use client'
import { Database } from '@/database.types'
import supabase from '@/utils/supabase'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

type Column = keyof Database['public']['Tables']['ingredients']['Row']

export default function UpdateIngredientInput({
  column,
  value,
  id,
}: {
  column: Column
  value: string | number | undefined
  id: string
}) {
  const [updatedValue, setUpdatedValue] = useState<string | number | undefined>(
    value
  )
  const router = useRouter()

  const updateIngredient = async (column: string, id: string) => {
    const updatedData: Partial<
      Database['public']['Tables']['ingredients']['Row']
    > = {
      [column]: updatedValue,
    }
    const { error } = await supabase
      .from('ingredients')
      .update(updatedData)
      .eq('id', id)

    if (error) {
      console.log('更新エラー:', error.message)
    } else {
      router.refresh()
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedValue(e.target.value)
  }

  const handleBlur = () => {
    setUpdatedValue(updatedValue)
    updateIngredient(column, id)
  }
  return (
    <input value={updatedValue} onChange={handleChange} onBlur={handleBlur} />
  )
}
