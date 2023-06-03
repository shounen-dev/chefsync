import { headers, cookies } from 'next/headers'
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '@/database.types'
import IngredientCategoryItem from './ingredient-category-item'
import DeleteIngredientCategoryItem from './delete-ingredient-category-item'

export default async function IngredientCategoriesList() {
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  })
  const { data: categories } = await supabase
    .from('categories')
    .select()
    .order('created_at', { ascending: true })

  return (
    <ul className="w-full">
      <li className="flex justify-center"></li>
      {categories?.map((category) => (
        <li
          key={category.id}
          className="px-4 flex justify-between hover:bg-slate-200 border-t-slate-500 border-t"
        >
          <IngredientCategoryItem id={category.id} title={category.title} />
          <DeleteIngredientCategoryItem id={category.id} />
        </li>
      ))}
    </ul>
  )
}
