import { useContext, useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { AuthContext } from "../hooks/AuthContext"

// Components
import NavBar from "../components/NavBar"
import AudioPlayer from "../components/AudioPlayer"

function AuthRoute() {
  const [auth] = useContext(AuthContext)

  // Audio player state
  const [ isPlaying, setIsPlaying ] = useState(true);
  const [ currentShow, setCurrentShow ] = useState(null);

  // Reroute users who have not logged in to root page
  const navigate = useNavigate()
  useEffect(() => {
    if (!auth) {
      navigate("../", { replace: true })
    }
  }, [auth])

  return (
    <>
      <NavBar />
      <Outlet context={[isPlaying, setIsPlaying, currentShow, setCurrentShow]}/>
      {isPlaying && <AudioPlayer
        image={currentShow.image}
        title={currentShow.show}
        episodeTitle={currentShow.episodeTitle}
        audioSource={currentShow.file}
      />}
    </>
  )
}
export default AuthRoute

// loader function to fetch data

export const showsLoader = async () => {
  const response = await fetch("https://podcast-api.netlify.app/shows")
  return response.json()
}
