import { headers, cookies } from 'next/headers'
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '@/database.types'
import CreateRecipeSelectCategory from './create-recipe-select-category'

export default async function CreateRecipeIngredients() {
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  })
  const { data: ingredients } = await supabase
    .from('ingredients')
    .select()
    .order('created_at', { ascending: true })
  const { data: categories } = await supabase
    .from('categories')
    .select()
    .order('created_at', { ascending: true })
  return (
    <>
      {/* @ts-ignore*/}
      <CreateRecipeSelectCategory
        ingredients={ingredients}
        categories={categories}
      />
    </>
  )
}
