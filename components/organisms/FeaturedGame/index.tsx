import GameItem from "../../molecules/GameItem"

const FeaturedGame = () => {
  return (
    <>
      <section className="featured-game pt-50 pb-50">
        <div className="container-fluid">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">
            Our Featured
            <br /> Games This Year
          </h2>
          <div
            className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
            data-aos="fade-up"
          >
            <GameItem thumbnail="Thumbnail-1" name="Super Mechs" category="Mobile" />
            <GameItem thumbnail="Thumbnail-2" name="Call of Duty: Modern" category="Mobile" />
            <GameItem thumbnail="Thumbnail-3" name="Mobile Legends" category="Mobile" />
            <GameItem thumbnail="Thumbnail-4" name="Clash of Clans" category="Mobile" />
            <GameItem thumbnail="Thumbnail-5" name="Valorant" category="Desktop" />
          </div>
        </div>
      </section>
    </>
  )
}

export default FeaturedGame
