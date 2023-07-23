import { useState, useContext, useEffect } from "react";
import { Preview } from "./Preview";
import { ShowsContext } from "../hooks/showsContext";
import { useSort } from "../hooks/useSort";
import { SortOptions } from "./SortOptions";

export default function AllPreviews() {
  const [ showsData, setShowsData ] = useContext(ShowsContext);
  const [ sort, setSort ] = useState('none');

  const sortedShows = useSort(showsData, sort);

  if(!sortedShows){
    return <h1>Loading Previews...</h1>
  }

  const allPreviews = sortedShows.map((show) => {
    return <Preview key={show.id} showId={show.id} genres={show.genres}/>
  })

  return (
    <section className="bg-platinum p-4 flex flex-col gap-2">
      <SortOptions setSort={setSort} />
      {allPreviews}
    </section>
  )
}