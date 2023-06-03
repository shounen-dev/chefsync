'use client'
import useStore, { useCreateIngredient } from '@/store'
import supabase from '@/utils/supabase'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import FetchIngredientCategory from './fetch-ingredient-category'

export default function CreateIngredient() {
  const router = useRouter()
  const { loginUser } = useStore()
  const {
    ingredient,
    updateIngredient,
    resetIngredient,
    ingredientCategory,
    updateIngredientCategory,
  } = useCreateIngredient()

  const defaultCategory = () => {
    if (ingredientCategory.length === 0) {
      return ''
    } else {
      return ingredientCategory[0].title
    }
  }
  const [initialCategory, setInitialCategory] = useState('')

  useEffect(() => {
    FetchIngredientCategory(updateIngredientCategory)
    updateIngredient({
      fieldName: 'category',
      value: defaultCategory(),
    })
    setInitialCategory(ingredient.category)
    // ESlintの注意を無視
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const hundleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (loginUser.id) {
      const { error } = await supabase
        .from('ingredients')
        .insert({ ...ingredient, user_id: loginUser.id })
      if (error) {
        alert('食材登録に失敗しました。再度実行してください。')
      } else {
        resetIngredient()
        updateIngredient({
          fieldName: 'category',
          value: initialCategory,
        })
        router.refresh()
      }
    }
  }

  const category = ingredientCategory.map((i) => i.title)
  return (
    <form onSubmit={hundleSubmit} className="w-full flex flex-col items-center">
      <div className="w-3/4 flex justify-between items-center">
        <p className="inline-block w-1/3 min-w-fit">種別：</p>
        <select
          className="my-2 w-1/2 rounded border border-gray-300 px-4 py-2 focus:outline-none"
          value={ingredient.category}
          onChange={(e) =>
            updateIngredient({
              fieldName: 'category',
              value: e.target.value,
            })
          }
        >
          {category.map((i, index) => (
            <option key={index} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>
      <div className="w-3/4 flex justify-between items-center">
        <p className="inline-block w-1/3 min-w-fit">食材名：</p>
        <input
          required
          type="text"
          className="my-2 w-1/2 rounded border border-gray-300 px-4 py-2 placeholder-gray-400 focus:outline-none"
          placeholder="食材名"
          value={ingredient.title}
          onChange={(e) =>
            updateIngredient({
              fieldName: 'title',
              value: e.target.value,
            })
          }
        />
      </div>
      <div className="w-3/4 flex justify-between items-center">
        <p className="inline-block w-1/3 min-w-fit">原価：</p>
        <input
          required
          type="number"
          className="my-2 w-1/2 rounded border border-gray-300 px-4 py-2 placeholder-gray-400 focus:outline-none"
          placeholder="原価"
          value={ingredient.price !== 0 ? ingredient.price : ''}
          onChange={(e) =>
            updateIngredient({
              fieldName: 'price',
              value: e.target.value,
            })
          }
        />
      </div>
      <div className="w-3/4 flex justify-between items-center">
        <p className="inline-block w-1/4 min-w-fit">仕入先：</p>
        <input
          required
          type="text"
          className="my-2 w-1/2 rounded border border-gray-300 px-4 py-2 placeholder-gray-400 focus:outline-none"
          placeholder="仕入先"
          value={ingredient.supplier ?? ''}
          onChange={(e) =>
            updateIngredient({
              fieldName: 'supplier',
              value: e.target.value,
            })
          }
        />
      </div>
      <div className="w-3/4 flex justify-between items-center">
        <p className="inline-block w-1/3 min-w-fit">調達分量：</p>
        <input
          required
          type="number"
          className="my-2 w-1/2 rounded border border-gray-300 px-4 py-2 placeholder-gray-400 focus:outline-none"
          placeholder="調達分量"
          value={ingredient.lot_size}
          onChange={(e) =>
            updateIngredient({
              fieldName: 'lot_size',
              value: e.target.value,
            })
          }
        />
      </div>
      <div className="w-3/4 flex justify-between items-center">
        <p className="inline-block w-1/3 min-w-fit">調達単位：</p>
        <input
          required
          type="text"
          className="my-2 w-1/2 rounded border border-gray-300 px-4 py-2 placeholder-gray-400 focus:outline-none"
          placeholder="調達単位"
          value={ingredient.lot_unit}
          onChange={(e) =>
            updateIngredient({
              fieldName: 'lot_unit',
              value: e.target.value,
            })
          }
        />
      </div>
      <div className="w-3/4 flex justify-between items-center">
        <p className="inline-block w-1/3 min-w-fit">計量分量：</p>
        <input
          required
          type="number"
          className="my-2 w-1/2 rounded border border-gray-300 px-4 py-2 placeholder-gray-400 focus:outline-none"
          placeholder="計量分量"
          value={ingredient.quantity !== 0 ? ingredient.quantity : ''}
          onChange={(e) =>
            updateIngredient({
              fieldName: 'quantity',
              value: e.target.value,
            })
          }
        />
      </div>
      <div className="w-3/4 flex justify-between items-center">
        <p className="inline-block w-1/3 min-w-fit">計量単位：</p>
        <input
          required
          type="text"
          className="my-2 w-1/2 rounded border border-gray-300 px-4 py-2 placeholder-gray-400 focus:outline-none"
          placeholder="計量単位"
          value={ingredient.unit}
          onChange={(e) =>
            updateIngredient({
              fieldName: 'unit',
              value: e.target.value,
            })
          }
        />
      </div>
      <div className="w-3/4 flex justify-between items-center">
        <p className="inline-block w-1/3 min-w-fit">塩分濃度％：</p>
        <input
          type="number"
          step={0.1}
          className="my-2 w-1/2 rounded border border-gray-300 px-4 py-2 placeholder-gray-400 focus:outline-none"
          placeholder="塩分濃度"
          value={
            ingredient.salt !== 0 &&
            ingredient.salt !== null &&
            ingredient.salt !== undefined
              ? ingredient.salt
              : ''
          }
          onChange={(e) =>
            updateIngredient({
              fieldName: 'salt',
              value: e.target.value,
            })
          }
        />
      </div>
      <button
        type="submit"
        className="my-4 rounded-md bg-sky-500 py-2 w-3/4 text-base font-medium text-white hover:bg-sky-600"
      >
        食材登録
      </button>
    </form>
  )
}
