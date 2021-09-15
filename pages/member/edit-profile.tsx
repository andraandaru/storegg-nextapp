/* eslint-disable @next/next/no-img-element */
import Cookies from "js-cookie"
import jwtDecode from "jwt-decode"
import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import Input from "../../components/atoms/Input"
import Sidebar from "../../components/organisms/Sidebar"
import { JWTPayloadTypes, UserTypes } from "../../services/data-types"
import { updateProfile } from "../../services/member"

interface UserStateTypes {
  name: string
  phoneNumber: string
  email: string
  avatar: any
}

const EditProfile = () => {
  const router = useRouter()
  const [user, setUser] = useState<UserStateTypes>({
    name: "",
    phoneNumber: "",
    email: "",
    avatar: "",
  })
  const [previewImage, setPreviewImage] = useState("")

  useEffect(() => {
    const token = Cookies.get("token")
    if (token) {
      const jwtToken = atob(token)
      const payload: JWTPayloadTypes = jwtDecode(jwtToken)
      const userFromPayload: UserTypes = payload.player
      const IMG = process.env.NEXT_PUBLIC_IMG
      userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`
      setUser(userFromPayload)
    }
  }, [])

  const onSubmit = async () => {
    const data = new FormData()
    data.append("image", user.avatar)
    data.append("name", user.name)
    data.append("phoneNumber", user.phoneNumber)

    const res = await updateProfile(data)
    if (res.error) {
      return toast.error(res.message.message)
    } else {
      toast.success("Data berhasil diubah")
      Cookies.remove("token")
      router.push("/sign-in")
    }
  }

  return (
    <>
      <section className="edit-profile overflow-auto">
        <Sidebar activeMenu="settings" />
        <main className="main-wrapper">
          <div className="ps-lg-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
            <div className="bg-card pt-30 ps-30 pe-30 pb-30">
              <form action="">
                <div className="photo d-flex">
                  <div className="position-relative me-20">
                    <div className="avatar img-fluid">
                      {previewImage ? (
                        <img
                          src={previewImage}
                          width="90"
                          height="90"
                          alt="avatar"
                          className="rounded-circle"
                        />
                      ) : (
                        <img
                          src={user.avatar}
                          width="90"
                          height="90"
                          alt="avatar"
                          className="rounded-circle"
                        />
                      )}
                    </div>
                    <div className="avatar-overlay position-absolute top-0 d-flex justify-content-center align-items-center">
                      <Image src="/icon/trash.svg" width={24} height={24} alt="trash" />
                    </div>
                  </div>
                  <div className="image-upload">
                    <label htmlFor="avatar">
                      <Image src="/icon/ic-upload.svg" width={90} height={90} alt="upload" />
                    </label>
                    <input
                      id="avatar"
                      type="file"
                      name="avatar"
                      accept="image/png, image/jpeg"
                      onChange={(e) => {
                        const img = e.target.files![0]
                        setPreviewImage(URL.createObjectURL(img))
                        return setUser({ ...user, avatar: img })
                      }}
                    />
                  </div>
                </div>
                <div className="pt-30">
                  <Input
                    label="Full Name"
                    value={user.name}
                    onChange={(e) =>
                      setUser({
                        ...user,
                        name: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="pt-30">
                  <Input label="Email Address" value={user.email} disabled />
                </div>
                <div className="pt-30">
                  <Input
                    label="Phone"
                    value={user.phoneNumber}
                    onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
                  />
                </div>
                <div className="button-group d-flex flex-column pt-50">
                  <button
                    type="button"
                    className="btn btn-save fw-medium text-lg text-white rounded-pill"
                    onClick={onSubmit}
                  >
                    Save My Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}

export default EditProfile
