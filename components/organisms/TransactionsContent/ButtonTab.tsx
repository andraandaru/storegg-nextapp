import Link from "next/link"
import cx from "classnames"

interface ButtonTabProps {
  title: string
  active?: boolean
}

const ButtonTab = ({ title, active = false }: ButtonTabProps) => {
  const classButton = cx({
    "btn btn-status rounded-pill text-sm me-3": true,
    "btn-active": active,
  })
  return (
    <Link href="/">
      <a data-filter="*" className={classButton}>
        {title}
      </a>
    </Link>
  )
}

export default ButtonTab
