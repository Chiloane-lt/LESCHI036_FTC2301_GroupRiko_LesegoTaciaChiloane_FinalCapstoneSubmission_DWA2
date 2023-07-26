import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlayCircle, faPauseCircle } from "@fortawesome/free-solid-svg-icons"

function AudioPlayer() {
  return (
    <div className="w-screen  bg-dark-green bg-opacity-50 backdrop-blur-sm px-4 fixed bottom-0 left-0 right-0">
      <div className="h-12 flex items-center">
        <img src="https://res.cloudinary.com/dumslp4el/image/fetch/w_676,h_676/https://content.production.cdn.art19.com/images/19/ac/06/ee/19ac06ee-4d75-41ea-9e92-c36b2c3c8703/cbaffd85daf5d39a448dd96faaf1d71c2d0071e8dc80f07d95c19b3fbaaa600f36df32f1656dbfd7b682e47c61ed3ebdc1d26c46dd3b823f98ff07b87849a0f4.jpeg" alt="podcast cover image" className="h-[80%]" />
        <div className="w-[68%] text-sm text-mint-cream indent-4">
          <h1>The Cave</h1>
          <p>EP 1: Thai Cave Rescue</p>
          </div>
        <FontAwesomeIcon icon={faPlayCircle} className="w-[20%] text-3xl text-mint-cream"/>
        {/* <FontAwesomeIcon icon={faPauseCircle}/> */}
      </div>
      <div className="bg-mint-cream w-full h-1 mb-1"></div>
    </div>
  )
}

export default AudioPlayer
