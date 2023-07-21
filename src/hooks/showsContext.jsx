import React, { useState, useEffect, createContext, useContext } from 'react'

const ShowsContext = createContext([{}, () => {}]);

const ShowsContextProvider = ({ children }) => {
  const [ showsData, setShowsData ] = useState();

  useEffect(() => {
    const fetchShows = async () => {
      fetch('https://podcast-api.netlify.app/shows')
      .then(response => response.json())
      .then(data => setShowsData(data))
   
    }

    fetchShows();
  }, [])

  return (
    <ShowsContext.Provider value={[ showsData, setShowsData ]}>
      {children}
    </ShowsContext.Provider>
  );
};

export { ShowsContext, ShowsContextProvider };
