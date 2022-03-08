import { createContext, useState } from "react"
import {
  Route,
  Routes,
  Link,
  useNavigate,
  Outlet,
  Navigate,
} from "react-router-dom"
import Login from "./components/login"
import Signup from "./components/signup"
import Userpage from "./components/Userpage"
import Felte from "./pages/felte"
import FormikValidate from "./pages/formikvalidate"
import UsehookForm from "./pages/useHook"
import User from "./pages/user"

export const UserContext = createContext<any | null>(null)

const Card = () => {
  return (
    <div className="bg-red-200 p-8">
      <h1>Hello I am a card</h1>
      <Outlet />
    </div>
  )
}

const ProtectedRoute = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  console.log("you've hit a protected route!!!!")
  console.log(`You are ${isLoggedIn ? "" : "not "}logged in!!!`)
  console.log(`${isLoggedIn ? "Welcome!" : "You will now be redirected!!!"}`)

  return isLoggedIn ? <Outlet /> : <Navigate to="/" replace />
}

function App() {
  const [user, setUser] = useState<any | null>(null)

  // const [isLoggedIn, setIsLoggedIn] = useState(false)

  // const login = () => {
  //   setIsLoggedIn(true)
  // }

  // const logout = () => {
  //   setIsLoggedIn(false)
  // }

  const isLoggedIn = !!user

  return (
    <div className="bg-slate-200 m-8 rounded-lg shadow-md p-16">
      <Link to="/" className="btn mb-8">
        Home
      </Link>
      <Routes>
        <Route
          path="*"
          element={
            <div className="flex flex-col text-xl font-bold my-4">
              <div className="flex gap-8  my-4">
                <Link to="forms">Forms</Link>
                <Link to="user">User</Link>
              </div>
              <Outlet />
            </div>
          }
        >
          <Route
            path="forms*"
            element={
              <div className="flex flex-col">
                <h1 className="text-5xl font-bold">Forms</h1>
                <div className="flex gap-8 my-8">
                  <Link to="formik">formik</Link>
                  <Link to="felte">felte</Link>
                  <Link to="hook">hook</Link>
                </div>
              </div>
            }
          />
        </Route>
      </Routes>

      <Routes>
        <Route path="forms" element={<Card />}>
          <Route path="formik" element={<FormikValidate />} />
          <Route path="felte" element={<Felte />} />
          <Route path="hook" element={<UsehookForm />} />
        </Route>
        <Route path="user" element={<User />}>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login setUser={setUser} />} />
          <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
            <Route path="page" element={<Userpage />} />
          </Route>
        </Route>
        <Route path="/" element={<Card />} />
        <Route path="*" element={<Card />} />
      </Routes>
    </div>
  )
}

export default App
