import { useContext, useEffect } from "react"
import { Navigate, Outlet, useNavigate } from "react-router-dom"
import { AuthContext } from "../hooks/AuthContext"
import { useLoaderData } from "react-router-dom"

// Components
import NavBar from "../components/NavBar"
import AudioPlayer from "../components/AudioPlayer"

function AuthRoute() {
  const shows = useLoaderData();

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

// loader function to fetch data

export const showsLoader = async () => {
  const response = await fetch('https://podcast-api.netlify.app/shows')
  return response.json()
}