// import { Suspense } from 'react'
// import Spinner from '../components/spinner'
import Auth from '../components/auth'

export default async function AuthPage() {
  return (
    <main className="flex flex-col h-full items-center justify-center">
      <Auth />
    </main>
  )
}
