import NavBar from '@/app/components/nav-bar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="flex text-md">
      <NavBar />
      <main className="flex w-full">{children}</main>
    </section>
  )
}
