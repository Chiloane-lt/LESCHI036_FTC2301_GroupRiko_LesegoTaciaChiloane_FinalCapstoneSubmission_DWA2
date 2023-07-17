import React from "react";
import { useShowData } from "../hooks/UseShowData";

export default function useGenreSearch(string, id) {

  // GET show with ID ✔️
  // Go to show genre array
  // Return show if isFeatured
  // Return 'not feaured' else

  const show = useShowData(id)
  console.log(show)
}