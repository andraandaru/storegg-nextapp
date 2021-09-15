import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"
import Cookies from "js-cookie"

interface CallAPIProps extends AxiosRequestConfig {
  token?: boolean
  serverToken?: string
}

export const callAPI = async ({ url, method, data, token, serverToken }: CallAPIProps) => {
  let headers = {}
  if (serverToken) {
    headers = {
      Authorization: `Bearer ${serverToken}`,
    }
  }
  if (token) {
    const tokenCookies = Cookies.get("token")
    if (tokenCookies) {
      const jwtToken = atob(tokenCookies!)
      headers = {
        Authorization: `Bearer ${jwtToken}`,
      }
    }
  }
  const response = await axios({
    url,
    method,
    data,
    headers,
  }).catch((err) => err.response)
  if (response.status > 300) {
    const res = {
      error: true,
      message: response.data,
      data: null,
    }
    return res
  }
  const res = {
    error: false,
    message: "success",
    data: response.data,
  }
  return res
}

export default callAPI
