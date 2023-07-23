import { useState } from "react";
import { Preview } from "../components/Preview";
import { useSort } from "../hooks/useSort";
import { SortOptions } from "../components/SortOptions";

export default function PreviewsLayout(props) {

  const { shows } = props;
  const [ showsData, setShowsData ] = useState(shows);
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