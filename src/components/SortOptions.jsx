import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const SortOptions = () => {
  // Returns 4 buttons
  // Onclick, changes State sort

  return (
    <div className="flex justify-between">

      <div className="text-dark-green border-solid border-[1px] bg-mint-cream divide-x divide-[1px] divide-platinum
      flex items-center text-[0.8em] w-max">
        <button className="p-1">A — Z</button>
        <button className="p-1">Z — A</button>
        <button className="p-1">Newest</button>
        <button className="p-1">Oldest</button>
      </div>

      <div className="w-[35%] bg-dark-green relative text-mint-cream text-[0.8em] text">
        <input type="text" placeholder="Search..." className="indent-6 h-[98%] w-[75%] bg-dark-green absolute right-1 top-0"/>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute left-1 top-2"/>
      </div>
    </div>
  )
}