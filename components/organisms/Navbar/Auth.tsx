import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import Cookies from "js-cookie"
import jwtDecode, { JwtPayload } from "jwt-decode"
import { JWTPayloadTypes, UserTypes } from "../../../services/data-types"
import { useRouter } from "next/router"

const Auth = () => {
  const router = useRouter()
  const [isLogin, setIsLogin] = useState(false)
  const [user, setUser] = useState({
    avatar: "",
  })
  useEffect(() => {
    const token = Cookies.get("token")
    if (token) {
      const jwtToken = atob(token)
      const payload: JWTPayloadTypes = jwtDecode(jwtToken)
      const user: UserTypes = payload.player
      const IMG = process.env.NEXT_PUBLIC_IMG
      user.avatar = `${IMG}/${user.avatar}`
      setIsLogin(true)
      setUser(user)
    }
  }, [])

  const onLogout = () => {
    Cookies.remove("token")
    router.push("/")
    setIsLogin(false)
  }

  if (isLogin) {
    return (
      <li className="nav-item my-auto dropdown d-flex">
        <div className="vertical-line d-lg-block d-none"></div>
        <div>
          <a
            className="dropdown-toggle ms-lg-40"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <Image src={user.avatar} className="rounded-circle" width="40" height="40" alt="" />
          </a>

          <ul className="dropdown-menu border-0" aria-labelledby="dropdownMenuLink">
            <li>
              <Link href="/member">
                <a className="dropdown-item text-lg color-palette-2">My Profile</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="dropdown-item text-lg color-palette-2">Wallet</a>
              </Link>
            </li>
            <li>
              <Link href="/member/edit-profile">
                <a className="dropdown-item text-lg color-palette-2">Account Settings</a>
              </Link>
            </li>
            <li>
              <a className="dropdown-item text-lg color-palette-2" onClick={onLogout} role="button">
                Log Out
              </a>
            </li>
          </ul>
        </div>
      </li>
    )
  }
  return (
    <>
      <li className="nav-item my-auto">
        <Link href="/sign-in">
          <a
            className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
            role="button"
          >
            Sign In
          </a>
        </Link>
      </li>
    </>
  )
}

export default Auth
