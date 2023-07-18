import React, { useContext } from "react";
import { Preview } from "./Preview";
import { ShowsContext } from "../hooks/showsContext";

export const AllPreviews = () => {
  const allShows = useContext(ShowsContext);

  if(!allShows){
    return <h1>Loading Previews...</h1>
  }

  const allPreviews = allShows.map((show) => {
    return <Preview key={show.id} showId={show.id} genres={show.genres}/>
  })

  return (
    <section className="bg-platinum p-4 flex flex-col gap-2">
      {allPreviews}
    </section>
  )
}