import UserProfile from '@/app/components/user-profile'

export default function DashboardPage() {
  return (
    <>
      <section className="w-5/12 flex flex-col items-center">
        <div>Dashboard</div>
        <UserProfile />
      </section>
    </>
  )
}
