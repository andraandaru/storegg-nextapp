import Image from "next/image"
import Menu from "./Menu"
import MenuContainer from "./MenuContainer"

const Footer = () => {
  return (
    <>
      <section className="footer pt-50">
        <footer>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 text-lg-start text-center">
                <a href="" className="mb-30">
                  <Image src="/icon/logo.png" width={60} height={60} alt="logo" />
                </a>
                <p className="mt-30 text-lg color-palette-1 mb-30">
                  StoreGG membantu gamers
                  <br /> untuk menjadi pemenang sejati
                </p>
                <p className="mt-30 text-lg color-palette-1 mb-30">
                  Copyright 2021. All Rights Reserved.
                </p>
              </div>
              <div className="col-lg-8 mt-lg-0 mt-20">
                <div className="row gap-sm-0">
                  <div className="col-md-4 col-6 mb-lg-0 mb-25">
                    <MenuContainer title="Company">
                      <Menu label="About Us" />
                      <Menu label="Press Release" />
                      <Menu label="Terms of Use" />
                      <Menu label="Privacy & Policy" />
                    </MenuContainer>
                  </div>
                  <div className="col-md-4 col-6 mb-lg-0 mb-25">
                    <MenuContainer title="Support">
                      <Menu label="Refund Policy" />
                      <Menu label="Unlock Rewards" />
                      <Menu label="Live Chatting" />
                    </MenuContainer>
                  </div>
                  <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
                    <MenuContainer title="Connect">
                      <Menu href="mailto: hi@store.gg" label="hi@store.gg" />
                      <Menu href="mailto: team@store.gg" label="team@store.gg" />
                      <Menu
                        href="http://maps.google.com/?q=Pasific 12, Jakarta Selatan"
                        label="Pasific 12, Jakarta Selatan"
                      />
                      <Menu href="tel: 02111229090" label="021 - 1122 - 9090" />
                    </MenuContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  )
}

export default Footer
