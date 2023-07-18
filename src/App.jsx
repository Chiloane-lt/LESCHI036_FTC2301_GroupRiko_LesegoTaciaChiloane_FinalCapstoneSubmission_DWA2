/**
 * TO-DO:
 * Preview - Update preview styling
 * Preview - Match placeholder to actual preview
 * Preview - Shrink text with screen size
 * Preview - Improve above by fixing text wrap on small screens
 * Carousel - Increase width of area for arrows
 * Carousel - Check overscroll behaviour
 * App - useContext to pass theme & show data
 * App - useReducer to track state
 * App - Lazy load logging in & favourites
 * App - Add error catching for all fetch requests.
 * App - Prettier all files before shipping off
 * Unsubscribe from all API calls by retunring useEffect cleanups
 */

import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import GenreCards from './components/GenreCards'
import { ShowsContext, ShowsContextProvider } from './hooks/showsContext'

import { AllPreviews } from './components/AllPreviews'

function App() {

  return (
    <>
      <NavBar />
      <Hero />
      <GenreCards />
      <ShowsContextProvider>
        <AllPreviews/>
      </ShowsContextProvider>
    </>
  )
}

export default App
