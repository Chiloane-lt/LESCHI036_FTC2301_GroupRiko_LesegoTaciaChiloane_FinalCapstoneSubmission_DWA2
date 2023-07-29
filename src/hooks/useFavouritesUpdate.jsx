import { useEffect, useState } from "react"
import supabase from "../supabaseClient"

// Use UseEffect
// Get a new state status
// If status is false => Delete in database (Will need episode title)
// If status is true => Add to database (Will need episode)
// Return SOMETHING

const useFavouritesUpdate = (status, episode, show) => {
  const { season, title, episode, file } = episode;

  const [ updateError, setUpdateError ] = useState();

  if (!title || !file || !show || !season || !episode) {
    alert("Incomeplete episode data. Could not update favourites.")
    return console.error("Favourites update failed.")
  }

  useEffect(() => {
    const deleteFave = async () => {
      const { error } = await supabase
      .from("favourites")
      .delete()
      .eq('title', title)

      if(error){
        setUpdateError(error)
      }
    }

    const addToFaves = async () => {
      const { data, error } = await supabase
        .from("favourites")
        .insert([{ show: show, season: season, episode: episode, file: file, title: title }])

        if(error){
          setUpdateError(error)
        }
    }

    if (!status) {
      deleteFave();
    }

    if (status) {
      addToFaves();
    }
  }, [status])

  return updateError? updateError : 'Success!'

}

export default useFavouritesUpdate
