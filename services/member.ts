import callAPI from "../config/api"

const ROOT_API = process.env.NEXT_PUBLIC_API
const API_VERSION = "api/v1"

export const getDashboard = async () => {
  const url = `${ROOT_API}/${API_VERSION}/players/dashboard`
  return callAPI({
    url,
    method: "GET",
    token: true,
  })
}

export const getHistory = async (valueParams: string) => {
  let query = ""
  if (valueParams === "all") {
    query = ""
  } else {
    query = `?status=${valueParams}`
  }
  const url = `${ROOT_API}/${API_VERSION}/players/history${query}`
  return callAPI({
    url,
    method: "GET",
    token: true,
  })
}

export const getHistoryDetail = async (id: string, token: string) => {
  const url = `${ROOT_API}/${API_VERSION}/players/history/${id}/detail`
  return callAPI({
    url,
    method: "GET",
    serverToken: token,
  })
}

export const updateProfile = async (data: FormData) => {
  const url = `${ROOT_API}/${API_VERSION}/players/profile`
  return callAPI({
    url,
    method: "PUT",
    token: true,
    data,
  })
}
