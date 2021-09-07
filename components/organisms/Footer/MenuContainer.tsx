import { ReactNode } from "react"

interface MenuContainerProps {
  children: ReactNode
  title: string
}

const MenuContainer = ({ children, title }: MenuContainerProps) => {
  return (
    <>
      <p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>
      <ul className="list-unstyled">{children}</ul>
    </>
  )
}

export default MenuContainer
