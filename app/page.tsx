import Header from './components/header'

export default function Home() {
  return (
    <>
      <Header />
      <main
        className={`flex flex-col justify-center items-center h-[calc(100vh-40px)]`}
      >
        <h1 className="text-base font-bold">ChefSync</h1>
        <p>レシピと食材の管理アプリ</p>
      </main>
    </>
  )
}
