'use client'
import supabase from '@/utils/supabase'

export default function LogoutBtn() {
  function signOut() {
    supabase.auth.signOut()
  }
  return <button onClick={signOut}>ログアウト</button>
}
