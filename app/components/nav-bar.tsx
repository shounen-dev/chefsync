import { Suspense } from 'react'
import Link from 'next/link'
import LogoutBtn from './logout-btn'

export default function NavBar() {
  return (
    <nav className={`w-1/12 min-w-fit h-[calc(100vh-40px)]`}>
      <ul className="flex flex-col items-center space-y-4">
        <li>
          <Link href={'/auth/dashboard'}>ダッシュボード</Link>
        </li>
        <li>
          <Link href={'/auth/dashboard/create-ingredient'}>食材登録</Link>
        </li>
        <li>
          <Link href={'/auth/dashboard/create-recipe'}>レシピ登録</Link>
        </li>
        <li>
          <Link href={'/auth/dashboard/recipes'}>レシピ一覧</Link>
        </li>
        <Link href={'/auth/dashboard/settings/categories'}>設定</Link>
        <li>
          <Suspense>
            <LogoutBtn />
          </Suspense>
        </li>
      </ul>
    </nav>
  )
}
