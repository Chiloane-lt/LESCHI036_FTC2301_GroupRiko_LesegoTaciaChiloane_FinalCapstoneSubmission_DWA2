import { useContext, useEffect } from "react"
import { Navigate, Outlet, useNavigate } from "react-router-dom"
import { AuthContext } from "../hooks/AuthContext"

// Components
import NavBar from "../components/NavBar"
import AudioPlayer from "../components/AudioPlayer"

function AuthRoute() {
  const [auth] = useContext(AuthContext)

  const navigate = useNavigate();
  useEffect(()=>{
    if(!auth) {
      navigate('../', {replace: true})
    }
  }, [auth])

  return <Outlet />
}

export default AuthRoute
