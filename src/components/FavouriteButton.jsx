import { useState, useEffect } from "react"

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { faHeart as FaHeart } from "@fortawesome/free-regular-svg-icons"

function FavouriteButton(props) {
  const { state, data } = props
  const [isFavourite, setIsFavourite] = useState(state)

  useEffect(() => {
    setIsFavourite(state)
  }, [state])

  const toggleFavourite = () => {
    setIsFavourite((prev) => {
      return !prev
    })
  }
  return (
    <>
      {isFavourite ? (
        <FontAwesomeIcon icon={faHeart} onClick={toggleFavourite} className="active:animate-ping" />
      ) : (
        <FontAwesomeIcon icon={FaHeart} onClick={toggleFavourite} className="active:animate-ping" />
      )}
    </>
  )
}

export default FavouriteButton
