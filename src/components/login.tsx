import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { app } from "../firebase"
import { useForm } from "@felte/react"

export default function Login({ setUser }: { setUser: any }) {
  const firebase = app

  const auth = getAuth()

  const login = useForm({
    onSubmit: (values) => {
      console.log("login", values)
      const { email, password } = values
      signInWithEmailAndPassword(auth, email, password).then((response) => {
        console.log(response)
        setUser(response)
      })
    },
  })
  return (
    <div className="max-w-xl">
      <h2 className="text-4xl font-bold mb-2">Log in</h2>
      <form ref={login.form} className="flex flex-col gap-4">
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
