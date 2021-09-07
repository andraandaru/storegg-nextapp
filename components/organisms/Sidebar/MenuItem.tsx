import Image from "next/image"
import Link from "next/link"
import cx from "classnames"

interface MenuItemProps {
  title: string
  icon: "overview" | "transactions" | "messages" | "card" | "rewards" | "settings" | "logout"
  active?: boolean
  href?: string
}

const MenuItem = ({ title, icon, active = false, href = "/member/" }: MenuItemProps) => {
  const classMenuItem = cx({
    item: true,
    "mb-30": true,
    active,
  })
  return (
    <>
      <div className={classMenuItem}>
        <div className="icon me-3">
          <Image src={`/icon/ic-menu-${icon}.svg`} width={25} height={25} alt={icon} />
        </div>
        <p className="item-title m-0">
          <Link href={href}>
            <a className="text-lg text-decoration-none">{title}</a>
          </Link>
        </p>
      </div>
    </>
  )
}

export default MenuItem
