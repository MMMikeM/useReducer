import { Link, Outlet } from "react-router-dom"

export default function User() {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex gap-8">
        <Link to="signup" className="btn">
          Sign Up
        </Link>
        <Link to="login" className="btn">
          Log in
        </Link>
        <Link to="page" className="btn">
          Logged in page
        </Link>
      </div>
      <Outlet />
    </div>
  )
}
