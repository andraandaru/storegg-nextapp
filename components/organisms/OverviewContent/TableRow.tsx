import Image from "next/image"
import cx from "classnames"

interface TableRowProps {
  image: string
  title: string
  category: string
  item: number
  price: number
  status: "Success" | "Failed" | "Pending"
}

const TableRow = ({ image, title, category, item, price, status }: TableRowProps) => {
  const classStatus = cx({
    "float-start icon-status": true,
    pending: status === "Pending",
    success: status === "Success",
    failed: status === "Failed",
  })
  return (
    <>
      <tr className="align-middle">
        <th scope="row">
          <div className="float-start me-3 mb-lg-0 mb-3">
            <Image src={`/img/${image}.png`} width={80} height={60} alt="" />
          </div>
          <div className="game-title-header">
            <p className="game-title fw-medium text-start color-palette-1 m-0">{title}</p>
            <p className="text-xs fw-normal text-start color-palette-2 m-0">{category}</p>
          </div>
        </th>
        <td>
          <p className="fw-medium color-palette-1 m-0">{item} Gold</p>
        </td>
        <td>
          <p className="fw-medium text-start color-palette-1 m-0">{price}</p>
        </td>
        <td>
          <div>
            <span className={classStatus}></span>
            <p className="fw-medium text-start color-palette-1 m-0 position-relative">{status}</p>
          </div>
        </td>
      </tr>
    </>
  )
}

export default TableRow
