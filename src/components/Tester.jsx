import React, { useContext } from "react";
import { ShowsContext } from "../hooks/showsContext";

export default function Tester() {

  const shows = useContext(ShowsContext);
  console.log(shows)
  return (
    <div>
      <h1>Your shows are here!</h1>
    </div>
  );
}