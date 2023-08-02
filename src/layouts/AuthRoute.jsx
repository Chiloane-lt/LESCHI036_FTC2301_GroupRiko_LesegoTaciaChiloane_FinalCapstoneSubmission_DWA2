import { useContext, useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { AuthContext } from "../hooks/AuthContext"

// Components
import NavBar from "../components/NavBar"
import AudioPlayer from "../components/AudioPlayer"

function AuthRoute() {
  const [auth] = useContext(AuthContext)

  // Audio player state
  const [ isPlaying, setIsPlaying ] = useState(false);
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
      <Outlet />
      {isPlaying && <AudioPlayer
        image={
          "https://res.cloudinary.com/dumslp4el/image/fetch/w_676,h_676/https://content.production.cdn.art19.com/images/19/ac/06/ee/19ac06ee-4d75-41ea-9e92-c36b2c3c8703/cbaffd85daf5d39a448dd96faaf1d71c2d0071e8dc80f07d95c19b3fbaaa600f36df32f1656dbfd7b682e47c61ed3ebdc1d26c46dd3b823f98ff07b87849a0f4.jpeg"
        }
        title={"Thai Cave Rescue"}
        episode={1}
        episodeTitle={"Against The Odds"}
        audioSource={"https://podcast-api.netlify.app/placeholder-audio.mp3"}
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
