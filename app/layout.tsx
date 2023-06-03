import './globals.css'

export const metadata = {
  title: 'ChefSync',
  description: 'レシピと食材の管理アプリ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
