export interface CategoryTypes {
  _id: string
  name: string
  __v: number
}

export interface GameItemTypes {
  _id: string
  name: string
  status: string
  thumbnail: string
  category: CategoryTypes
}

export interface BanksTypes {
  _id: string
  name: string
  bankName: string
  noRekening: string
}

export interface PaymentsTypes {
  _id: string
  type: string
  status: string
  banks: BanksTypes[]
}

export interface NominalsTypes {
  _id: string
  coinQuantity: number
  coinName: string
  price: number
}

export interface LoginTypes {
  email: string
  password: string
}

export interface UserTypes {
  id: string
  username: string
  email: string
  name: string
  avatar: string
  phoneNumber: string
}

export interface JWTPayloadTypes {
  player: UserTypes
  iat: number
}

export interface CheckoutTypes {
  voucher: string
  nominal: string
  payment: string
  bank: string
  name: string
  accountUser: string
}

export interface HistoryVoucherTopupTypes {
  thumbnail: string
  gameName: string
  coinName: string
  coinQuantity: string
  category: string
  price: string
}

export interface HistoryPaymentTypes {
  bankName: string
  name: string
  noRekening: string
  type: string
}

export interface HistoryTransactionsTypes {
  _id: string
  value: number
  status: string
  historyVoucherTopup: HistoryVoucherTopupTypes
  category: CategoryTypes
  accountUser: string
  tax: number
  name: string
  historyPayment: HistoryPaymentTypes
}

export interface TopUpCategoriesTypes {
  _id: string
  name: string
  value: number
}
