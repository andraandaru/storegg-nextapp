import jwtDecode from "jwt-decode"
import { GetServerSidePropsContext } from "next"
import Sidebar from "../../../components/organisms/Sidebar"
import TransactionsContent from "../../../components/organisms/TransactionsContent"
import { JWTPayloadTypes, UserTypes } from "../../../services/data-types"

const Transactions = () => {
  return (
    <>
      <section className="transactions overflow-auto">
        <Sidebar activeMenu="transactions" />
        <TransactionsContent />
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
    props: {},
  }
}

export default Transactions
