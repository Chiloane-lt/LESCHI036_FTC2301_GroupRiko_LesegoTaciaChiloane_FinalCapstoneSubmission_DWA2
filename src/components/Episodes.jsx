import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

export default function Episodes(props) {

  const { extractedSeason } = props;

    if(!extractedSeason[0]) {
      return <h1>Loading Episodes...</h1>
    }

  const seasonEpisodes = extractedSeason[0].episodes;

  const episodeCards = seasonEpisodes.map((episode) => {
    return (
        <div key={episode.episode} className="text-xs text-dark-green px-2 py-2 bg-platinum h-28 m-auto flex items-center w-full">
          <div className="w-[90%]">
          <h1 className="font-bold">Episode {episode.episode}: {episode.title}</h1>
          <p className="line-clamp-3">{episode.description}</p>
          </div>
          <FontAwesomeIcon icon={faCirclePlay} className="text-xl"/>
        </div>
    )
  })


  return (
    <>
      <div className="flex flex-col gap-2 p-4">
        {episodeCards}
      </div>
    </>
  )
}