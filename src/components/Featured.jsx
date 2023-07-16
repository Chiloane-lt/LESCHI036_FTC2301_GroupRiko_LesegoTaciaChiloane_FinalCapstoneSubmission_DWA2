import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";


export default function Featured(props){
  
  const { showId } = props;
  const [ featuredShow, setFeaturedShow ] = useState()

  useEffect(() => {
    fetch(`https://podcast-api.netlify.app/id/${showId}`)
      .then(response => response.json())
      .then(featuredShowData => setFeaturedShow(featuredShowData))
  }, [])

  const genres = featuredShow ? featuredShow.genres : undefined;
  const isFeatured = genres ? genres.includes('Featured') : undefined;

  return (
    <>
      {isFeatured && <img src={featuredShow.image}></img>}
    </>
  )
}

