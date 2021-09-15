import { useCallback, useEffect, useState } from "react"
import NumberFormat from "react-number-format"
import { toast } from "react-toastify"
import { HistoryTransactionsTypes } from "../../../services/data-types"
import { getHistory } from "../../../services/member"
import ButtonTab from "./ButtonTab"
import TableRow from "./TableRow"

const TransactionsContent = () => {
  const [data, setData] = useState({
    data: [],
    total: 0,
  })
  const [onTab, setOnTab] = useState("all")

  const fetchTransaction = useCallback(async (value) => {
    const res = await getHistory(value)
    if (res.error) {
      toast.error(res.error)
    } else {
      setData(res.data)
    }
  }, [])

  useEffect(() => {
    fetchTransaction("all")
  }, [])

  const onClickTab = (value: string) => {
    setOnTab(value)
    fetchTransaction(value)
  }

  const IMG = process.env.NEXT_PUBLIC_IMG

  return (
    <>
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">My Transactions</h2>
          <div className="mb-30">
            <p className="text-lg color-palette-2 mb-12">You’ve spent</p>
            <h3 className="text-5xl fw-medium color-palette-1">
              <NumberFormat
                value={data.total}
                prefix="Rp. "
                displayType="text"
                thousandSeparator="."
                decimalSeparator=","
              />
            </h3>
          </div>
          <div className="row mt-30 mb-20">
            <div className="col-lg-12 col-12 main-content">
              <div id="list_status_title">
                <ButtonTab
                  onClick={() => onClickTab("all")}
                  title="All Trx"
                  active={onTab === "all"}
                />
                <ButtonTab
                  onClick={() => onClickTab("success")}
                  title="Success"
                  active={onTab === "success"}
                />
                <ButtonTab
                  onClick={() => onClickTab("pending")}
                  title="Pending"
                  active={onTab === "pending"}
                />
                <ButtonTab
                  onClick={() => onClickTab("failed")}
                  title="Failed"
                  active={onTab === "failed"}
                />
              </div>
            </div>
          </div>
          <div className="latest-transaction">
            <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
            <div className="main-content main-content-table overflow-auto">
              <table className="table table-borderless">
                <thead>
                  <tr className="color-palette-1">
                    <th className="" scope="col">
                      Game
                    </th>
                    <th scope="col">Item</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody id="list_status_item">
                  {data.data.map((item: HistoryTransactionsTypes) => {
                    return (
                      <TableRow
                        key={item._id}
                        image={`${IMG}/${item.historyVoucherTopup.thumbnail}`}
                        title={item.historyVoucherTopup.gameName}
                        category={item.historyVoucherTopup.category}
                        item={`${item.historyVoucherTopup.coinQuantity} ${item.historyVoucherTopup.coinName}`}
                        price={item.value}
                        status={item.status}
                        id={item._id}
                      />
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default TransactionsContent
