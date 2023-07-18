import React, { useState, useContext, useEffect } from "react";
import { Preview } from "./Preview";
import { ShowsContext } from "../hooks/showsContext";
import { useDateSort } from "../hooks/useDateSort";
import { useAlphaSort } from "../hooks/useAlphaSort";
import { SortOptions } from "./SortOptions";

export const AllPreviews = () => {
  const showsData = useContext(ShowsContext);

  const [ allShows, setAllShows ] = useState(showsData);
  
  const [ sort, setSort ] = useState('none');

  useEffect(() => {
    // get current state and make a copy
    // Pass copy to sort check
    // set sorted copy as state
    // Therefore there will not be a need for custom hooks
  }, [allShows]);

  if(!allShows){
    return <h1>Loading Previews...</h1>
  }

  const allPreviews = allShows.map((show) => {
    return <Preview key={show.id} showId={show.id} genres={show.genres}/>
  })

  return (
    <section className="bg-platinum p-4 flex flex-col gap-2">
      <SortOptions setSort={setSort} />
      {allPreviews}
    </section>
  )
}