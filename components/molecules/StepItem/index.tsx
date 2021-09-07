/* eslint-disable @next/next/no-img-element */
import Image from "next/image"

export interface StepItemProps {
  icon: "step1" | "step2" | "step3"
  title: string
  desc1: string
  desc2: string
}

const StepItem = ({ icon, title, desc1, desc2 }: StepItemProps) => {
  return (
    <>
      <div className="card feature-card border-0">
        <div className="mb-30">
          <Image src={`/icon/${icon}.svg`} width={80} height={80} alt={icon} />
        </div>
        <p className="fw-semibold text-2xl mb-2 color-palette-1">{title}</p>
        <p className="text-lg color-palette-1 mb-0">
          {desc1}
          <br />
          {desc2}
        </p>
      </div>
    </>
  )
}

export default StepItem
