import React, { useState, useEffect } from "react";

export const useShowData = (string, id) => {

  const [ show, setShow ] = useState();

  useEffect(() => {
    fetch(`https://podcast-api.netlify.app/id/${id}`)
      .then(response => response.json())
      .then(data => setShow(data))
  }, [id]);

  if (!show || !show.genres) {
    return {}
  }

  const isFeatured = show.genres.includes(string);

  return isFeatured ? show : {};
}