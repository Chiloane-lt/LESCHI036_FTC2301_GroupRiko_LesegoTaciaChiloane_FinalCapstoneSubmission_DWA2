/**
 * TO-DO:
 * Update preview styling
 * Carousel - Increase width of area for arrows
 * Carousel - Check overscroll behaviour
 * App - useContext to pass theme & show data
 * App - useReducer to track state
 * App - Lazy load logging in & favourites
 * App - Add error catching for all fetch requests.
 * Unsubscribe from all API calls by retunring useEffect cleanups
 */

import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import GenreCards from './components/GenreCards'
import { ShowsContext, ShowsContextProvider } from './hooks/showsContext'

import { Preview } from './components/Preview'

function App() {

  const test = {
    "id": "6451",
    "title": "Detective Trapp",
    "description": "Anaheim investigator Julissa Trapp is not like other detectives. She’s the only woman on the homicide squad, and a skilled chameleon: undercover cop in vice stings, crime-scene commander, patient confidante of killers. A master interrogator, she invokes her personal experience – and deepest griefs – as a tool to elicit confessions. When a young woman’s body is found at a trash-sorting plant, Trapp learns the murder may be linked to the disappearance of three other women in nearby Santa Ana. Trapp embarks on a dark journey that brings her face to face with a man who takes “a little piece of her soul.” The series is about a singular detective on a relentless, sometimes lonely quest for answers. From the Los Angeles Times and Wondery, “Detective Trapp” is a new story from Christopher Goffard, the writer and host of “Dirty John.”",
    "seasons": 1,
    "image": "https://content.production.cdn.art19.com/images/db/ee/b4/b5/dbeeb4b5-40f6-4b03-8d99-2a81b5cf8e33/3661121915afa366ce97e923e54003290a0cf6f67a9e52eba050514df5276702b51e4c13f5af4feab8410c29b21aeece9d96af3e0464bcd24a603a42a3755ef9.png",
    "genres": [2],
    "updated": "2022-04-05T20:18:06.000Z"
  }

  return (
    <>
      <NavBar />
      <Hero />
      <GenreCards />
      <ShowsContextProvider>
        <Preview showId={test.id} genres={test.genres} />
      </ShowsContextProvider>
    </>
  )
}

export default App
