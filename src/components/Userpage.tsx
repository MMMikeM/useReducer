import { useContext } from "react"
import { UserContext } from "../App"

export default function Userpage() {
  const user = useContext(UserContext)
  console.log(user)

  return (
    <div className="">
      <div>Userpage</div>
      {user ? (
        <div className="">{JSON.stringify(user.user, null, 4)}</div>
      ) : (
        <div>Please log in</div>
      )}
    </div>
  )
}
