'use client'
import useStore from '@/store'
import supabase from '@/utils/supabase'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { ChangeEvent } from 'react'

export default function CreateIngredientCategory() {
  const { loginUser } = useStore()
  const router = useRouter()
  const [category, setCategory] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (loginUser.id) {
      const { error } = await supabase
        .from('categories')
        .insert({ title: category, user_id: loginUser.id })
      if (error) {
        alert('登録に失敗しました。再度実行してください。')
        console.log(error.message)
      } else {
        setCategory('')
        router.refresh()
        console.log('成功')
      }
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">
      <div className="w-3/4 flex justify-between items-center">
        <p className="inline-block w-1/3 min-w-fit">食材種別</p>
        <input
          required
          type="text"
          className="my-2 w-1/2 rounded border border-gray-300 px-4 py-2 placeholder-gray-400 focus:outline-none"
          placeholder="食材種別"
          value={category}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="my-4 rounded-md bg-sky-500 py-2 w-3/4 text-base font-medium text-white hover:bg-sky-600"
      >
        登録
      </button>
    </form>
  )
}
