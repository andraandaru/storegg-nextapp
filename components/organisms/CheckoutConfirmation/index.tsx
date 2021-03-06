import { useRouter } from "next/router"
import { useState } from "react"
import { toast } from "react-toastify"
import { setCheckout } from "../../../services/player"

const CheckoutConfirmation = () => {
  const router = useRouter()

  const [checkbox, setCheckbox] = useState(false)

  const onSubmit = async () => {
    const dataVoucherLocal = localStorage.getItem("data-voucher")
    const dataTopupLocal = localStorage.getItem("data-topup")

    const dataVoucher = JSON.parse(dataVoucherLocal!)
    const dataTopup = JSON.parse(dataTopupLocal!)

    if (!checkbox) {
      toast.error("Pastikan anda telah melakukan pembayaran!")
    } else {
      const data = {
        voucher: dataVoucher._id,
        nominal: dataTopup.nominalItem._id,
        payment: dataTopup.paymentItem.payment._id,
        bank: dataTopup.paymentItem.bank._id,
        name: dataTopup.bankAccount,
        accountUser: dataTopup.verifyID,
      }

      const response = await setCheckout(data)
      if (response.error) {
        toast.error(response.message)
      } else {
        toast.success("Checkout Berhasil")
        router.push("/complete-checkout")
      }
    }
  }
  return (
    <>
      <label className="checkbox-label text-lg color-palette-1">
        I have transferred the money
        <input type="checkbox" checked={checkbox} onChange={() => setCheckbox(!checkbox)} />
        <span className="checkmark"></span>
      </label>
      <div className="d-md-block d-flex flex-column w-100 pt-50">
        <button
          className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg"
          type="button"
          onClick={onSubmit}
        >
          Confirm Payment
        </button>
      </div>
    </>
  )
}

export default CheckoutConfirmation
