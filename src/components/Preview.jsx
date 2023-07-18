import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faHandHoldingDroplet,
  faHandcuffs, faLandmark,
  faMasksTheater,
  faPhotoFilm, faArrowTrendUp,
  faRobot,
  faNewspaper,
  faChildren,
} from "@fortawesome/free-solid-svg-icons";

export const Preview = (props) => {

  const { showId, genres } = props;
  const [ currentShow, setCurrentShow ] = useState();

  useEffect(() => {
    fetch(`https://podcast-api.netlify.app/id/${showId}`)
      .then(res  => res.json())
      .then(showData => setCurrentShow(showData))
  }, [])

  if (!currentShow) {
    return (
      <div aria-hidden='true' className="shadow-md bg-mint-cream h-20 w-80 m-auto">
        <svg className="relative animate-pulse px-4">
          <rect x="4" y="8" 
          className="fill-gray-300 w-16 h-16" />
          <rect x="94" y="10"
          className="fill-gray-300 w-48 h-3"/>
          <rect x="94" y="32" 
          className="fill-gray-300 w-48 h-3" />
          <rect x="94" y="56"
          className="fill-gray-300 w-48 h-3" />
        </svg>
      </div>
    )
  } else {
    const { title, seasons, image, updated } = currentShow;

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
    const updateDate = new Date(updated);
    const readeableDate = `
    ${updateDate.getDate()} ${months[updateDate.getMonth()]} ${updateDate.getFullYear()}
    `;

      const genreTags = genres.map((genre, index) => {
        const genresList = [
          faStar,
          faHandHoldingDroplet,
          faHandcuffs,
          faLandmark,
          faMasksTheater,
          faPhotoFilm,
          faArrowTrendUp,
          faRobot,
          faNewspaper,
          faChildren
        ];

        if(index === genres.length - 1){
          return (
            <a href="#" key={index} ><FontAwesomeIcon icon={genresList[genre]}/></a>
          )
        }
        return (
          <a href="#" key={index} ><FontAwesomeIcon icon={genresList[genre]}/>, </a>
        )
      })

    return (
      <button>
          <img src={image} alt="Podcast preview image"/>
          <div>
            <h2>{title}</h2>
            <h3>Seasons: {seasons.length}</h3>
            <p>Last Updated: {readeableDate}</p>
            {genreTags && <p>{genreTags}</p>}
          </div>
      </button>
    )
  }
}