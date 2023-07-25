import React, { useState } from 'react'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as FaHeart } from '@fortawesome/free-regular-svg-icons';

function FavouriteButton() {
  const [ isFavourite, setIsFavourite ] = useState(false);

  const toggleFavourite = () => {
    setIsFavourite(prev => !prev);
  }
  return (
    <>
    {isFavourite ? <FontAwesomeIcon icon={faHeart} onClick={toggleFavourite} className='active:animate-ping'/> : <FontAwesomeIcon icon={FaHeart} onClick={toggleFavourite} className='active:animate-ping'/>}
      
      
    </>
  )
}

export default FavouriteButton