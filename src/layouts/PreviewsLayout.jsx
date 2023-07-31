import { useState } from "react"
import Fuse from 'fuse.js'


import { Preview } from "../components/Preview"
import { useSort } from "../hooks/useSort"
import { SortOptions } from "../components/SortOptions"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

export default function PreviewsLayout(props) {

  // Handle fuse.js search
  const { shows } = props;
  const fuse = new Fuse(shows, {
    keys: [
      'title',
    ]
  });
  const [ searchQuery, setSearchQuery ] = useState('');
  const searchResults = fuse.search(searchQuery)

  // Fuse.js returns results as an object nested
  // inside another property under an 'item' key
  // Therefore, must move result objects up a level
  // Set to all shows in no search has been passed
  const reducedSearch = searchQuery ? searchResults.map((obj) => obj.item) : shows;

// Sort the resulting search results. Or just sort all shows if no search.
  const [sort, setSort] = useState("none");
  const sortedShows = useSort(reducedSearch, sort);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value)
    setSort('none') // Fuse.js sorts results by relevance.
  }
  if (!sortedShows) {
    return <h1>Loading Previews...</h1>
  }


  const allPreviews = sortedShows.map((show) => {
    return <Preview key={show.id} showId={show.id} genres={show.genres} />
  })

  return (
    <section className="bg-platinum p-4 flex flex-col gap-2">
      <div className="flex justify-between">
        <SortOptions setSort={setSort} />
        <div className="w-[35%] bg-dark-green relative text-mint-cream text-[0.8em] text">
          <input
            type="text"
            placeholder="Search..."
            onChange={handleSearch}
            value={searchQuery}
            className="indent-1 h-[98%] w-[75%] bg-dark-green absolute right-1 top-0"
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute left-1 top-2" />
        </div>
      </div>
      {allPreviews}
    </section>
  )
}
