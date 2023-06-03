'use client'
import { useState } from 'react'
import { Database } from '@/database.types'
import CreateRecipeRefineSearch from './create-recipe-refine-search'

type Props = {
  ingredients: Database['public']['Tables']['ingredients']['Row'][] | null
  categories: Database['public']['Tables']['categories']['Row'][] | null
}

export default function CreateRecipeSelectCategory({
  ingredients,
  categories,
}: Props) {
  const allCategories = categories?.map((i) => i.title)

  let arr: string[] = ['全て']
  if (ingredients) {
    const items = ingredients.map((i) => i.category)
    arr.push(...items)
  } else {
    arr = ['']
  }

  //配列の重複を削除
  const unique = new Set(arr)
  let filtered = allCategories?.filter((i) => unique.has(i))
  if (!filtered) {
    filtered = ['']
  }
  const filteredCategories = ['全て']
  filteredCategories.push(...filtered)

  const [selectedCategory, setSelectedCategory] = useState(
    filteredCategories[0]
  )
  const [refineSearchKey, setRefineSearchKey] = useState('')

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value)
    setRefineSearchKey(Math.random().toString()) // ランダムなキーを設定して再描画をトリガーする
  }

  return (
    <>
      <div className="flex justify-between items-center w-3/4">
        <p>食材種別：</p>
        <select
          className="my-2 w-1/2 rounded border border-gray-300 px-4 py-2 focus:outline-none"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          {filteredCategories.map((i, index) => (
            <option key={index} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>
      <CreateRecipeRefineSearch
        key={refineSearchKey} // ランダムなキーを設定することで再描画をトリガーする
        selectedCategory={selectedCategory}
        ingredients={ingredients}
      />
    </>
  )
}
