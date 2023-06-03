'use client'
import supabase from '@/utils/supabase'
import { useRouter } from 'next/navigation'

export default function DeleteIngredientBtn({ id }: { id: string }) {
  const router = useRouter()
  const hundleDelete = async (id: string) => {
    const { error } = await supabase.from('ingredients').delete().eq('id', id)
    if (error) {
      alert(error.message)
    } else {
      router.refresh()
    }
  }
  return <button onClick={() => hundleDelete(id)}>delete</button>
}
