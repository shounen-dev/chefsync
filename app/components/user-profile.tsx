'use client'
import useStore from '@/store'

export default function UserProfile() {
  const { loginUser } = useStore()

  return (
    <div>
      <p>user profile:</p>
      <p>{loginUser.email}</p>
    </div>
  )
}
