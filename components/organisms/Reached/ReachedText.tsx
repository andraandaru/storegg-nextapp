import cx from "classnames"

interface ReachedTextProps {
  start?: boolean
  desc1: string
  desc2: string
}

const ReachedText = ({ start = false, desc1, desc2 }: Partial<ReachedTextProps>) => {
  const classContainer = cx({
    "me-lg-35": true,
    "ms-lg-35": !start,
  })
  return (
    <>
      <div className={classContainer}>
        <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">{desc1}</p>
        <p className="text-lg text-lg-start text-center color-palette-2 m-0">{desc2}</p>
      </div>
    </>
  )
}

export default ReachedText
