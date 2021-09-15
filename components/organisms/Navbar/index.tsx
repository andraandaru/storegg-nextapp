import Menu from "./Menu"
import Image from "next/image"
import Link from "next/link"
import ToggleNav from "./ToggleNav"
import Auth from "./Auth"

const Navbar = () => {
  return (
    <>
      <section>
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
          <div className="container-fluid">
            <Link href="/">
              <a className="navbar-brand">
                <Image src="/icon/logo.png" width={60} height={60} alt="logo" />
              </a>
            </Link>
            <ToggleNav />
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
                <Menu title="Home" active />
                <Menu title="Games" />
                <Menu title="Rewards" />
                <Menu title="Discover" />
                <Menu title="Global Rank" />
                <Auth />
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  )
}

export default Navbar
