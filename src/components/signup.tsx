import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { app } from "../firebase"
import { useForm } from "@felte/react"
import { useContext, useEffect } from "react"
import { UserContext } from "../App"
import { useNavigate } from "react-router-dom"

export default function Signup() {
  const firebase = app

  const auth = getAuth()

  const user = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      return navigate("/")
    }
  }, [])

  const signup = useForm({
    onSubmit: (values) => {
      console.log(values)
      const { email, password } = values
      createUserWithEmailAndPassword(auth, email, password).then((response) => {
        console.log(response)
      })
    },
  })
  return (
    <div className="max-w-xl">
      <h2 className="text-4xl font-bold mb-2">Sign Up</h2>
      <form ref={signup.form} className="flex flex-col gap-4">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          placeholder="john@moses.com"
          type="email"
        />
        <label htmlFor="password">Passwod</label>
        <input
          id="password"
          name="password"
          placeholder="potato"
          type="password"
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}
