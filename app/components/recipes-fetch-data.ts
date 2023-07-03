import { headers, cookies } from 'next/headers'
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'

type Recipe = {
  id: string
  created_at: string
  title: string
  price: number
  image_path: string
  people: number
  tags: string[]
}
type Recipes = Recipe[]

export default async function RecipesFetchData(): Promise<Recipes> {
  const supabase = createServerComponentSupabaseClient({
    headers,
    cookies,
  })
  const { data, error } = await supabase
    .rpc('get_recipe_list')
    .order('created_at', { ascending: true })
  const recipes: Recipes = data
  if (error) {
    console.log(error)
  }
  return recipes
}
