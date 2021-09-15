import Image from "next/image"
import Link from "next/link"

export interface GameItemProps {
  id: string
  thumbnail: string
  name: string
  category: string
}

const GameItem = ({ id, thumbnail, name, category }: GameItemProps) => {
  return (
    <>
      <div className="featured-game-card position-relative">
        <Link href={`/detail/${id}`}>
          <a>
            <div className="blur-sharp">
              <div className="thumbnail">
                <Image className="thumbnail" src={thumbnail} width={205} height={270} alt="" />
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
