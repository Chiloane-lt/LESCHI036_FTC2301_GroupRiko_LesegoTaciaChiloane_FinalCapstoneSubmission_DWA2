import Hero from '../components/Hero'
import GenreCards from '../components/GenreCards'
import AllPreviews from '../components/AllPreviews'

import { ShowsContext, ShowsContextProvider } from '../hooks/showsContext'
import NavBar from '../components/NavBar'

export default function Home() {

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