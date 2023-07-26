import { useEffect, useRef, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlayCircle, faPauseCircle } from "@fortawesome/free-solid-svg-icons"

function AudioPlayer() {
  const [ isPlaying, setIsPlaying ] = useState(false)

  // This will be added to a new state with all audio
  // info. To be saved to local storage for recalling later.
  // const [ currentTime, setCurrentTime ] = useState(0);
  const [ duration, setDuration ] = useState(0);

  const ref = useRef(null);
  const progressBar = useRef(null);
  const progressAnimation = useRef(null);

  useEffect(() => {
    const length = Math.floor(ref.current.duration);
    setDuration(length);
    progressBar.current.max = length;
  }, [ref?.current?.loadedmetadata, ref?.current?.readyState])

  const toggleAudio = () => {
    const nextIsPlaying = !isPlaying
    setIsPlaying(nextIsPlaying)

    if (nextIsPlaying) {
      ref.current.play()
      progressAnimation.current = requestAnimationFrame(songPlaying)
    } else {
      ref.current.pause()
      cancelAnimationFrame(progressAnimation.current)
    }
  }

  const songPlaying = () => {
    progressBar.current.value = ref.current.currentTime;
    progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`);
    progressAnimation.current = requestAnimationFrame(songPlaying);
  }

  const updateRange = () => {
    ref.current.currentTime = progressBar.current.value;
    progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
  }

  return (
    <>
      <div className="w-screen  bg-dark-green bg-opacity-50 backdrop-blur-sm px-4 fixed bottom-0 left-0 right-0">
        <div className="h-12 flex items-center">
          <img
            src="https://res.cloudinary.com/dumslp4el/image/fetch/w_676,h_676/https://content.production.cdn.art19.com/images/19/ac/06/ee/19ac06ee-4d75-41ea-9e92-c36b2c3c8703/cbaffd85daf5d39a448dd96faaf1d71c2d0071e8dc80f07d95c19b3fbaaa600f36df32f1656dbfd7b682e47c61ed3ebdc1d26c46dd3b823f98ff07b87849a0f4.jpeg"
            alt="podcast cover image"
            className="h-[80%]"
          />
          <div className="w-[68%] text-sm text-mint-cream indent-4">
            <h1>The Cave</h1>
            <p>EP 1: Thai Cave Rescue</p>
          </div>
          {isPlaying ? (
            <FontAwesomeIcon icon={faPauseCircle} onClick={toggleAudio} className="w-[20%] text-3xl text-mint-cream" />
          ) : (
            <FontAwesomeIcon icon={faPlayCircle} onClick={toggleAudio} className="w-[20%] text-3xl text-mint-cream" />
          )}
        </div>
        <input
        type="range"
        min={0}
        defaultValue={0}
        ref={progressBar}
        onChange={updateRange}
        className="h-1 accent-dark-green"
        />
        <audio
        ref={ref}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}>
          <source src="https://podcast-api.netlify.app/placeholder-audio.mp3" type="audio/ogg" />
        </audio>
      </div>
    </>
  )
}

export default AudioPlayer
