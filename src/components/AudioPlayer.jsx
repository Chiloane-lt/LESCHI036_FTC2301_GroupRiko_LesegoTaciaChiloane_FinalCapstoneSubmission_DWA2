import React, { useState } from "react";

export default function AudioPlayer() {
const [ showOnPlay, setShowOnPlay ] = useState();

  return (
    <>
      <img src="https://res.cloudinary.com/dumslp4el/image/fetch/w_676,h_676/https://content.production.cdn.art19.com/images/19/ac/06/ee/19ac06ee-4d75-41ea-9e92-c36b2c3c8703/cbaffd85daf5d39a448dd96faaf1d71c2d0071e8dc80f07d95c19b3fbaaa600f36df32f1656dbfd7b682e47c61ed3ebdc1d26c46dd3b823f98ff07b87849a0f4.jpeg"/>
      <audio preload="metadata" controls>
      <source src="https://assets.codepen.io/4358584/Anitek_-_Komorebi.mp3" type="audio/mpeg"></source>
      <p>
        Your browser does not support HTML audio, but you can still
      </p>
    </audio>
    </>
  )
}