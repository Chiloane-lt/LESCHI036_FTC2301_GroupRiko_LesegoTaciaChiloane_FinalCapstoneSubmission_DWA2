import { useEffect, useState } from "react"
import { supabase } from "../supabaseClient"

import NavBar from "../components/NavBar"
import Hero from "../components/Hero"
import FavouritesCards from "../components/FavouritesCards"

const Favourites = () => {
  const [favourites, setFavourites] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const groupedContainers = []

  useEffect(() => {
    const fetchFaves = async () => {
      try {
        let { data, error } = await supabase.from("favourites").select("*")
        if (error) {
          throw new Error("Failed to fetch favourites")
        }
        setFavourites(data)
        setIsLoading(false)
      } catch (error) {
        console.error(error)
        setIsLoading(false)
      }
    }
    fetchFaves()
  }, [])
  const grouped = favourites.reduce(function (r, a) {
    r[a.show] = r[a.show] || []
    r[a.show].push(a)
    return r
  }, Object.create(null))

  if (grouped) {
    for (const [key, value] of Object.entries(grouped)) {
      groupedContainers.push(
        <div key={key} className="border border-black m-4">
          {value.map((episode) => {
            return <FavouritesCards key={episode.id} data={episode} />
          })}
        </div>
      )
    }
  }

  return (
    <>
      <NavBar />
      <Hero />
      {isLoading && <h1>Loading...</h1>}
      {!isLoading && favourites.length === 0 && <h1>No favourites found.</h1>}
      {!isLoading && groupedContainers}
    </>
  )
}

export default Favourites
