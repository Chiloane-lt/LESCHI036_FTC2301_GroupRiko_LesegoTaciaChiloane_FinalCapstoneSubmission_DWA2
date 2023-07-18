import React, { useState, useContext } from "react";
import { Preview } from "./Preview";
import { ShowsContext } from "../hooks/showsContext";
import { useDateSort } from "../hooks/useDateSort";

export const AllPreviews = () => {
  const allShows = useContext(ShowsContext);
  const [ sort, setSort ] = useState('oldest');

  const test = useDateSort(allShows, sort);
  console.log(test);

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