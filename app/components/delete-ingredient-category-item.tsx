'use client'
import supabase from '@/utils/supabase'
import { useRouter } from 'next/navigation'

interface Props {
  id: string
}

export default function DeleteIngredientCategoryItem(props: Props) {
  const { id } = props
  const router = useRouter()
  const handleClick = async () => {
    const { error } = await supabase.from('categories').delete().eq('id', id)
    if (error) {
      console.log('delete error:', error.message)
    } else {
      router.refresh()
    }
  }
  return <button onClick={handleClick}>delete</button>
}
