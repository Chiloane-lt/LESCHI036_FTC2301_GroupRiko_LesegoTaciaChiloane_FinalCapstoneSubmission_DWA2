import { useRef, useState, useEffect } from "react"

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlay, faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons"

// components
import FavouriteButton from "./FavouriteButton"

function SingleEpisode(props) {
  const { episode } = props
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [ duration, setDuration ] = useState('00:00');
  const ref = useRef(0)

  // Get duration
  useEffect(() => {
    setDuration(ref.current.duration)
  }, [ref?.current?.loadedmetadata, ref?.current?.readyState])

  const getTimeStamp = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time%60);
    return `${minutes > 9 ? minutes : ('0' + minutes)}:${seconds > 9 ? seconds : ('0' + seconds)}`
  }

  const toggleDropdown = () => {
    setIsDescriptionOpen((prev) => !prev)
  }

  return (
    <div className="flex flex-col bg-mint-cream text-dark-green shadow-md">
    <div className="h-20 flex items-center text-sm">
      <FontAwesomeIcon icon={faCirclePlay} className="w-[15%] text-2xl"/>
      <div className="w-[70%]">
        <h1 className="font-medium">{episode.title}</h1>
        <p className="font-light">Episode {episode.episode} • <FavouriteButton /> • {duration ? getTimeStamp(duration) : '00:00'}</p>
      </div>
      {isDescriptionOpen ? (
            <FontAwesomeIcon icon={faAngleUp} onClick={toggleDropdown} className="w-[15%] text-xl"/>) : (
            <FontAwesomeIcon icon={faAngleDown} onClick={toggleDropdown} className="w-[15%] text-xl"/>
          )}
    </div>
    {isDescriptionOpen && <p className="text-xs px-8 pb-4 text-justify">{episode.description}</p>}
    <audio
    preload='metadata'
    ref={ref}>
      <source src={episode.file} type="audio/ogg" />
    </audio>
    </div>
  )
}

export default SingleEpisode