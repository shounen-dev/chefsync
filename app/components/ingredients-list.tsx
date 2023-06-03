import { headers, cookies } from 'next/headers'
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '@/database.types'
import IngredientItem from './ingredient-item'

export default async function IngredientsList() {
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  })
  const { data: ingredients } = await supabase
    .from('ingredients')
    .select()
    .order('created_at', { ascending: true })

  return (
    <>
      {ingredients?.map((i) => (
        <IngredientItem key={i.id} {...i} />
      ))}
    </>
  )
}
