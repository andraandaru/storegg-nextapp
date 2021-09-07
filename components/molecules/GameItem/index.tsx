import Image from "next/image"
import Link from "next/link"

export interface GameItemProps {
  thumbnail: "Thumbnail-1" | "Thumbnail-2" | "Thumbnail-3" | "Thumbnail-4" | "Thumbnail-5"
  name: string
  category: string
}

const GameItem = ({ thumbnail, name, category }: GameItemProps) => {
  return (
    <>
      <div className="featured-game-card position-relative">
        <Link href="/detail">
          <a>
            <div className="blur-sharp">
              <div className="thumbnail">
                <Image
                  className="thumbnail"
                  src={`/img/${thumbnail}.png`}
                  width={205}
                  height={270}
                  alt=""
                />
              </div>
            </div>
            <div className="cover position-absolute bottom-0 m-32">
              <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
                <div className="game-icon mx-auto">
                  <Image src="/icon/console.svg" height={36} width={54} alt="" />
                </div>
                <div>
                  <p className="fw-semibold text-white text-xl m-0">{name}</p>
                  <p className="fw-light text-white m-0">{category}</p>
                </div>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </>
  )
}

export default GameItem
