/**
 * TO-DO:
 * Unsubscribe from all API calls by retunring useEffect cleanups
 * Carousel - Increase width of area for arrows
 * Carousel - Check overscroll behaviour
 * App - useContext to pass theme & show data
 * App - useReducer to track state
 */



import React, { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import GenreCards from './components/GenreCards'
import Featured from './components/Featured'

function App() {

  const [ shows, setShows ] = useState();

  useEffect(() => {
    fetch('https://podcast-api.netlify.app/shows')
    .then(response => response.json())
    .then(showData => setShows(showData))
  }, []) 

  return (
    <>
      <NavBar />
      <Hero />
      <GenreCards />
      <Featured showId="6717"/>
    </>
  )
}

export default App
