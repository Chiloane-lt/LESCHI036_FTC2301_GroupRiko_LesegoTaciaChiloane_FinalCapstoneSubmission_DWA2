import React, { useState, useEffect } from "react";

export const useShowsData = () => {
  const [ state, setState ] = useState();

  useEffect(() => {
    const dataFetch = async () => {
      const showsData = await (await fetch ('https://podcast-api.netlify.app/shows')).json();

      setState(showsData)
    };

    dataFetch();
  }, []);

  return { showsData: state};
}