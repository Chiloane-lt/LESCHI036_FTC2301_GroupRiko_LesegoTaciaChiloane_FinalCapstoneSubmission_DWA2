import React, { useState, useContext, useEffect } from "react";
import { Preview } from "./Preview";
import { ShowsContext } from "../hooks/showsContext";
import { useDateSort } from "../hooks/useDateSort";
import { useAlphaSort } from "../hooks/useAlphaSort";
import { SortOptions } from "./SortOptions";

export default function AllPreviews() {
  const [ showsData, setShowsData ] = useContext(ShowsContext);
  const [ sort, setSort ] = useState('none');

  const sortedShows = useAlphaSort(showsData, sort);

  /**
   * Add search options
   * Display shows
   * Change sort if search options are clicked
   * Pass function to update sort from parent to child
   * i.e from AllPreviews to SortOptions
   * Rerender after click
   */

  if(!sortedShows){
    return <h1>Loading Previews...</h1>
  }

  // const allPreviews = allShows.map((show) => {
  //   return <Preview key={show.id} showId={show.id} genres={show.genres}/>
  // })

  // return (
  //   <section className="bg-platinum p-4 flex flex-col gap-2">
  //     <SortOptions setSort={setSort} />
  //     {allPreviews}
  //   </section>
  // )
}