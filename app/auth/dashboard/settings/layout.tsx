import Link from 'next/link'

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <section className="w-1/12 min-w-fit">
        <ul className="flex flex-col items-center space-y-4">
          <li>
            <Link href={'/auth/dashboard/settings/categories'}>食材種別</Link>
          </li>
          <li>レシピ種別</li>
        </ul>
      </section>
      <section className="w-2/3 min-w-fit">{children}</section>
    </>
  )
}
