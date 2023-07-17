import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCircleUser } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  return (
    <header
    className="h-16 w-full fixed bg-dark-green bg-opacity-50 backdrop-blur-sm">
      <nav className="flex justify-between px-4 mt-4 items-center">
        <h1 className="text-mint-cream">
          Talk
          <span className="font-bold">BOX</span>
        </h1>
        <div className="w-1/4 flex justify-between">
        <FontAwesomeIcon icon={faHeart} className="h-4 min-[300px]:h-6 text-mint-cream"/>
        <FontAwesomeIcon icon={faCircleUser} className="h-4 min-[300px]:h-6 text-mint-cream"/>
        </div>
      </nav>
    </header>
  )
}