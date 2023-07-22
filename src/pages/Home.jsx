import Hero from '../components/Hero'
import GenreCards from '../components/GenreCards'
import AllPreviews from '../components/AllPreviews'

import { ShowsContext, ShowsContextProvider } from '../hooks/showsContext'

export default function Home() {

  return (
    <>
      <Hero />
      <GenreCards />
      <ShowsContextProvider>
        <AllPreviews/>
      </ShowsContextProvider>
    </>
  )
}