import Footer from "./Footer"
import MenuItem from "./MenuItem"
import Profile from "./Profile"

interface SidebarProps {
  activeMenu: "overview" | "transactions" | "settings"
}

const Sidebar = ({ activeMenu }: SidebarProps) => {
  return (
    <>
      <section className="sidebar">
        <div className="content pt-50 pb-30 ps-30">
          <Profile />
          <div className="menus">
            <MenuItem title="Overview" icon="overview" active={activeMenu === "overview"} />
            <MenuItem
              title="Transactions"
              icon="transactions"
              href="/member/transactions"
              active={activeMenu === "transactions"}
            />
            <MenuItem title="Messages" icon="messages" href="/member/" />
            <MenuItem title="Card" icon="card" href="/member/" />
            <MenuItem title="Rewards" icon="rewards" href="/member/" />
            <MenuItem
              title="Settings"
              icon="settings"
              href="/member/edit-profile"
              active={activeMenu === "settings"}
            />
            <MenuItem title="Log Out" icon="logout" href="/sign-in" />
          </div>
          <Footer />
        </div>
      </section>
    </>
  )
}

export default Sidebar
