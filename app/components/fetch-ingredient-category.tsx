'use client'
import supabase from '@/utils/supabase'
import { Database } from '@/database.types'

type Categories = Database['public']['Tables']['categories']['Row'][]

export default function FetchIngredientCategory(
  payload: (categories: Categories) => void
) {
  const fetchData = async () => {
    const { data: categories, error } = await supabase
      .from('categories')
      .select()
      .order('created_at', { ascending: true })
    if (error) {
      console.log('fetch categories error:', error.message)
    } else {
      payload(categories)
    }
  }
  fetchData()
}
