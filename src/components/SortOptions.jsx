import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const SortOptions = (props) => {

  // Returns 4 buttons
  // Onclick, changes update sort
  // whenever sort options change, UPDATE PARENT STATE and rerender
  // Use useEffect to watch & rerender

  const { sort } = props;
  const [ sortOrder, setSortOrder ] = useState(sort)

  const handleSortAlphaDes = () => {
    setSortOrder('Z-A')
  }
  const handleSortAlphaAsc = () => {
    setSortOrder('A-Z')
  }
  const handleSortDateDes = () => {
    setSortOrder('newest')
  }
  const handleSortDateAsc = () => {
    setSortOrder('oldest')
  }

  return (
    <div className="flex justify-between">

      <div className="text-dark-green border-solid border-[1px] bg-mint-cream divide-x divide-[1px] divide-platinum
      flex items-center text-[0.8em] w-max">
        <button onClick={handleSortAlphaAsc} className="p-1">A — Z</button>
        <button onClick={handleSortAlphaDes} className="p-1">Z — A</button>
        <button onClick={handleSortDateDes} className="p-1">Newest</button>
        <button onClick={handleSortDateAsc}className="p-1">Oldest</button>
      </div>

      <div className="w-[35%] bg-dark-green relative text-mint-cream text-[0.8em] text">
        <input type="text" placeholder="Search..." className="indent-1 h-[98%] w-[75%] bg-dark-green absolute right-1 top-0"/>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute left-1 top-2"/>
      </div>
    </div>
  )
}