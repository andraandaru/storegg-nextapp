import TransactionsDetailContent from "../../../components/organisms/TransactionsDetailContent"
import { HistoryTransactionsTypes } from "../../../services/data-types"
import { getHistoryDetail } from "../../../services/member"

interface TransactionDetailProps {
  transactionDetail: HistoryTransactionsTypes
}

const TransactionDetail = ({ transactionDetail }: TransactionDetailProps) => {
  return (
    <>
      <section className="transactions-detail overflow-auto">
        <TransactionsDetailContent data={transactionDetail} />
      </section>
    </>
  )
}

interface GetServerSideProps {
  req: {
    cookies: {
      token: string
    }
  }
  params: {
    idTrx: string
  }
}

export const getServerSideProps = async ({ req, params }: GetServerSideProps) => {
  const { token } = req.cookies
  const { idTrx } = params
  if (!token) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    }
  }

  const jwtToken = Buffer.from(token, "base64").toString("ascii")
  const response = await getHistoryDetail(idTrx, jwtToken)
  return {
    props: {
      transactionDetail: response.data,
    },
  }
}

export default TransactionDetail
