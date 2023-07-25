import SingleEpisode from "./SingleEpisode";

export default function EpisodesContainer(props) {  
  const { extractedSeason } = props;

    if(!extractedSeason[0]) {
      return <h1>Loading Episodes...</h1>
    }

  const seasonEpisodes = extractedSeason[0].episodes;
  const episodeCards = seasonEpisodes.map((episode) => {
    return (
      <SingleEpisode key={episode.episode} episode={episode} />
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