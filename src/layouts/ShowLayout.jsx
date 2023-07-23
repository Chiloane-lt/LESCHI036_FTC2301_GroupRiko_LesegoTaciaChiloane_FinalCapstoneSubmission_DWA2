import React, { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom"

// components
import Carousel from '../components/Carousel';
import Episodes from '../components/Episodes';

export default function ShowLayout(){
const { id } = useParams();
const show = useLoaderData();

const [ currentSeason, setCurrentSeason ] = useState();
const [ isOpen, setIsOpen ] = useState(false);

const seasonVisibilityHandler = (seasonNum) => {
  if (!isOpen) {
    setCurrentSeason(seasonNum);
    setIsOpen(true);
  }

  if (currentSeason === seasonNum) {
    setIsOpen(false);
    setCurrentSeason(null);
  } else {
    setCurrentSeason(seasonNum)
  }
}

const seasonCards = show.seasons.map((season) => {
  return (
    <div key={season.season} onClick={() => {
      seasonVisibilityHandler(season.season)
    }} className="bg-dark-green h-full aspect-square text-center text-mint-cream">
      <h2>{season.title}</h2>
      <h3>{season.episodes.length} Episodes</h3>
    </div>
  )
})

  return (
    <>
      <figure className="flex items-center h-[36vh] bg-dark-green text-mint-cream font-extrabold px-4 justify-around">
        <img src={show.image} alt={`${show.title} cover image`} className="h-28 shadow-[4px_4px_4px_0px_#F6F6F6]"/>
        <h1>{show.title}</h1>
      </figure>
      <p className="px-4 py-8 text-center text-sm text-dark-green">{show.description}</p>
      <Carousel name="Seasons" cards={seasonCards} />
      {isOpen && <Episodes extractedSeason={show.seasons.filter((season) => {
        return season.season === currentSeason;
      })}/>}
    </>
  )
}

// loaader function

export const showDetailsLoader = async ({ params }) => {
  const { id } = params;

  const response = await fetch(`https://podcast-api.netlify.app/id/${id}`)

  return response.json();
}