import axios from "axios"
import callAPI from "../config/api"
import { CheckoutTypes } from "./data-types"

const ROOT_API = process.env.NEXT_PUBLIC_API
const API_VERSION = "api/v1"

export const getFeaturedGame = async () => {
  const URL = "players/landingpage"
  const res = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`)
  return res.data
}

export const getDetailVoucher = async (id: string) => {
  const URL = `players/${id}/detail`
  const res = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`)
  return res.data
}

export const getGameCategory = async () => {
  const URL = "players/category"
  const res = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`)
  return res.data
}

export const setCheckout = async (data: CheckoutTypes) => {
  const url = `${ROOT_API}/${API_VERSION}/players/checkout`
  return callAPI({
    url,
    method: "POST",
    data,
    token: true,
  })
}