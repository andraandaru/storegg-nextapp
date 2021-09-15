import jwtDecode from "jwt-decode"
import { GetServerSidePropsContext } from "next"
import OverviewContent from "../../components/organisms/OverviewContent"
import Sidebar from "../../components/organisms/Sidebar"
import { JWTPayloadTypes, UserTypes } from "../../services/data-types"

const Member = () => {
  return (
    <>
      <section className="overview overflow-auto">
        <Sidebar activeMenu="overview" />
        <OverviewContent />
      </section>
    </>
  )
}

export const getServerSideProps = async ({ req }: GetServerSidePropsContext) => {
  const { token } = req.cookies
  if (!token) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    }
  }

  const jwtToken = Buffer.from(token, "base64").toString("ascii")
  const payload: JWTPayloadTypes = jwtDecode(jwtToken)
  const user: UserTypes = payload.player
  const IMG = process.env.NEXT_PUBLIC_IMG
  user.avatar = `${IMG}/${user.avatar}`
  return {
    props: {
      user,
    },
  }
}

export default Member
