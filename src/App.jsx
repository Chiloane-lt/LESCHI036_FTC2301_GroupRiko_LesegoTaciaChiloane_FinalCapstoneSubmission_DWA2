/**
 * TO-DO:
 * Unsubscribe from all API calls by retunring useEffect cleanups
 * Carousel - Increase width of area for arrows
 * Carousel - Check overscroll behaviour
 * App - useContext to pass theme & show data
 * App - useReducer to track state
 * App - Lazy load logging in & favourites
 */

import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import GenreCards from './components/GenreCards'
import { ShowsContext, ShowsContextProvider } from './hooks/showsContext'

import Tester from './components/Tester'

function App() {

  return (
    <>
      <NavBar />
      <Hero />
      <GenreCards />
      <ShowsContextProvider>
        <Tester />
      </ShowsContextProvider>
    </>
  )
}

export default App
