import SingleEpisode from "./SingleEpisode";

export default function EpisodesContainer(props) {  
  const { season: { show, extractedSeason, season } } = props;

    if(!extractedSeason[0]) {
      return <h1>Loading Episodes...</h1>
    }

  const seasonEpisodes = extractedSeason[0].episodes;
  const episodeCards = seasonEpisodes.map((episode) => {
    return (
      <SingleEpisode key={episode.episode} episode={episode} show={show} season={season}/>
    )
  })
  return (
    <>
      <div className="flex flex-col gap-2 p-4 bg-platinum">
        {episodeCards}
      </div>
    </>
  )
}