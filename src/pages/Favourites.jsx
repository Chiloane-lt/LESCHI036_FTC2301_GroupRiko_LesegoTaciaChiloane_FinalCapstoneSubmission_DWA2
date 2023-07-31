import { useEffect, useState } from "react"
import { supabase } from "../supabaseClient"

import NavBar from "../components/NavBar"
import Hero from "../components/Hero"

const Favourites = () => {
  const [ favourites, setFavourites ] = useState([])
  const [ isLoading, setIsLoading ] = useState(true)
  const groupContainer = [];

  useEffect(() => {
    const fetchFaves = async () => {
      let { data, error } = await supabase
      .from("favourites")
      .select("*")
      setFavourites(data)
      setIsLoading(false)
    }
    fetchFaves()
  }, [])

  const grouped = favourites.reduce(function (r, a) {
    r[a.show] = r[a.show] || [];
    r[a.show].push(a);
    return r;
}, Object.create(null));


if(grouped) {
//   const favesContainer = grouped.map((show, index) => {
//   return <fieldset key={index}></fieldset>
// })



for (const [key, value] of Object.entries(grouped)) {
  groupContainer.push(
  <fieldset key={key}
  className="border border-black m-4">
    <legend>{key}</legend>
    {value.map((episode) => {
      return (
        <div key={episode.id}>
          <h1>{episode.title}</h1>
        </div>
      )
    })}
  </fieldset>
  )
}}



// Iterate through groups
// For each return a container
// Pass group array to container

  return (
    <>
      <NavBar />
      <Hero />
      {isLoading && <h1>Loading...</h1>}
      {!isLoading && <div>{groupContainer}</div>}
    </>
  )
}

export default Favourites
