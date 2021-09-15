import { useEffect, useState } from "react"

const CheckoutItem = () => {
  const [dataVoucher, setDataVoucher] = useState({
    thumbnail: "",
    name: "",
    category: {
      name: "",
    },
  })

  useEffect(() => {
    const dataFromLocal = localStorage.getItem("data-voucher")
    const dataVoucherLocal = JSON.parse(dataFromLocal!)
    setDataVoucher(dataVoucherLocal)
  }, [])

  const IMG = process.env.NEXT_PUBLIC_IMG

  return (
    <>
      <div className="game-checkout d-flex flex-row align-items-center pt-md-50 pb-md-50 pt-30 pb-30">
        <div className="pe-4">
          <div className="cropped">
            <img src={`${IMG}/${dataVoucher.thumbnail}`} alt="thumbnail" className="img-fluid" />
          </div>
        </div>
        <div>
          <p className="fw-bold text-xl color-palette-1 mb-10">{dataVoucher.name}</p>
          <p className="color-palette-2 m-0">Category: {dataVoucher.category.name}</p>
        </div>
      </div>
    </>
  )
}

export default CheckoutItem
