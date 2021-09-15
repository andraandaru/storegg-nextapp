import cx from "classnames"

interface ButtonTabProps {
  title: string
  active?: boolean
  onClick: () => void
}

const ButtonTab = ({ title, active = false, onClick }: ButtonTabProps) => {
  const classButton = cx({
    "btn btn-status rounded-pill text-sm me-3": true,
    "btn-active": active,
  })
  return (
    <button type="button" onClick={onClick} className={classButton}>
      {title}
    </button>
  )
}

export default ButtonTab
