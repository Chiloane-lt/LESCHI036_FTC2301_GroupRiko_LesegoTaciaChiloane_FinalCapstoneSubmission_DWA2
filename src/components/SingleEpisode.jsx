import { useState } from "react"

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlay, faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons"

// components
import FavouriteButton from "./FavouriteButton"

function SingleEpisode(props) {
  const { episode } = props
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDescriptionOpen((prev) => !prev)
  }



  return (
    <div className="flex flex-col bg-mint-cream text-dark-green shadow-md">
    <div className="h-20 flex items-center text-sm">
      <FontAwesomeIcon icon={faCirclePlay} className="w-[15%] text-2xl"/>
      <div className="w-[70%]">
        <h1 className="font-medium">{episode.title}</h1>
        <p>Episode {episode.episode} • <FavouriteButton /></p>
      </div>
      {isDescriptionOpen ? (
            <FontAwesomeIcon icon={faAngleUp} onClick={toggleDropdown} className="w-[15%] text-xl"/>) : (
            <FontAwesomeIcon icon={faAngleDown} onClick={toggleDropdown} className="w-[15%] text-xl"/>
          )}
    </div>
    {isDescriptionOpen && <p className="text-xs px-8 pb-4 text-justify">{episode.description}</p>}
    </div>

  )
}

export default SingleEpisode