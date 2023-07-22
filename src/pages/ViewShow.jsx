import React, { useState, useEffect } from "react";
import Carousel from "../components/Carousel";

export default function ViewShow(props) {

  const { showId } = props;
  const [ show, setShow ] = useState();

  useEffect(() => {
    fetch(`https://podcast-api.netlify.app/id/${showId}`)
      .then(response => response.json())
      .then(showData => setShow(showData))
  }, [showId])

  if(!show) {
    return <h1>Loading...</h1>
  }

  const seasonCards = show.seasons.map((season, index) => {
    return (
      <div key={season.season} className="bg-dark-green h-full aspect-square text-center text-mint-cream">
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
      <p className="px-4 py-8 text-center text-sm">{show.description}</p>
      <Carousel name="Seasons" cards={seasonCards} />
    </>
  )
}