import cx from "classnames"

interface MenuProps {
  title: string
  active?: boolean
  href: string
}
const Menu = ({ title, active, href = "/" }: Partial<MenuProps>) => {
  const classTitle = cx({
    "nav-link": true,
    active,
  })

  return (
    <>
      <li className="nav-item my-auto">
        <a className={classTitle} aria-current="page" href={href}>
          {title}
        </a>
      </li>
    </>
  )
}

export default Menu
