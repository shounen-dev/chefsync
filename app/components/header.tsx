import LoginBtn from './login-btn'

export default function Header() {
  return (
    <section className="flex justify-between p-2">
      <h1 className="select-none font-bold text-base">ChefSync</h1>
      <LoginBtn />
    </section>
  )
}
