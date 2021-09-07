import Image from "next/image"
import { ReactNode } from "react"

interface CategoriProps {
  icon: "desktop" | "game-mobile" | "other-categories"
  children: ReactNode
  nominal: number
}

const Categori = ({ icon, children, nominal }: CategoriProps) => {
  return (
    <>
      <div className="categories-card">
        <div className="d-flex align-items-center mb-24">
          <Image src={`/icon/ic-${icon}.svg`} width={60} height={60} alt={icon} />
          <p className="color-palette-1 mb-0 ms-12">{children}</p>
        </div>
        <div>
          <p className="text-sm color-palette-2 mb-1">Total Spent</p>
          <p className="text-2xl color-palette-1 fw-medium m-0">{nominal}</p>
        </div>
      </div>
    </>
  )
}

export default Categori
