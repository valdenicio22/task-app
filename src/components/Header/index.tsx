import logoImg from '../../assets/taskAppLogo.svg'

export function Header() {
  return (
    <header className="flex items-center justify-center h-[12.5rem] bg-base-gray-700 px-4">
      <img src={logoImg} alt="Task app logo" />
    </header>
  )
}
