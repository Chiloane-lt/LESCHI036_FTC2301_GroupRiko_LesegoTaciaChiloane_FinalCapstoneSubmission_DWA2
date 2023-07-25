import { useState } from "react";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faAngleDown,
  faAngleUp
} from "@fortawesome/free-solid-svg-icons";

// components
import FavouriteButton from "./FavouriteButton";

function SingleEpisode(props) {
  const { episode } = props;
  const [ isDescriptionOpen, setIsDescriptionOpen ] = useState(false);

  const toggleDropdown = () => {
    setIsDescriptionOpen(prev => !prev);
  }

  return (
        <>
      <div key={episode.episode} className="text-xs text-dark-green px-2 py-2 bg-platinum m-auto flex items-center w-[90%]">
            <FontAwesomeIcon icon={faCirclePlay} className="text-3xl py-2"/>
            <div>
              <h1 className="font-bold">{episode.title}</h1>
              <div>Episode {episode.episode} • 25:59</div>
              <FavouriteButton />
            </div>
          {isDescriptionOpen ? <FontAwesomeIcon icon={faAngleUp} onClick={toggleDropdown}/> : <FontAwesomeIcon icon={faAngleDown} onClick={toggleDropdown}/>}
        </div>
        {isDescriptionOpen && <p>{episode.description}</p>}
    </>
  )
}

export default SingleEpisode