'use client'
import { useRouter } from 'next/navigation'

export default function LoginBtn() {
  const router = useRouter()
  return (
    <div className="flex text-base">
      <button onClick={() => router.push('/auth')} className="mr-2 select-none">
        ログイン
      </button>
      <p className="text-slate-500 mr-2">または</p>
      <button
        onClick={() => router.push('/auth')}
        className="bg-sky-500 px-6 rounded-sm text-white duration-100 hover:bg-sky-600 select-none"
      >
        サインアップ
      </button>
    </div>
  )
}
