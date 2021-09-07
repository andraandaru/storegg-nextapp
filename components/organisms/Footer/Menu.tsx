import Link from "next/link"

interface MenuProps {
  href: string
  label: string
}
const Menu = ({ href = "/", label }: Partial<MenuProps>) => {
  return (
    <>
      <li className="mb-6">
        <Link href={href}>
          <a className="text-lg color-palette-1 text-decoration-none">{label}</a>
        </Link>
      </li>
    </>
  )
}

export default Menu
