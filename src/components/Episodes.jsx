export default function Episodes(props) {

  const { extractedSeason } = props;

    if(!extractedSeason[0]) {
      return <h1>Loading Episodes...</h1>
    }

  const seasonEpisodes = extractedSeason[0].episodes;

  const episodeCards = seasonEpisodes.map((episode) => {
    return (
      <div key={episode.episode} className="text-sm px-2 py-2 bg-platinum w-full h-28 m-auto">
      <h1 className="font-bold">Episode {episode.episode}: {episode.title}</h1>
      <p className="line-clamp-3">{episode.description}</p>
    </div>
    )
  })


  return (
    <>
      <div className="flex flex-col gap-2 px-4">
        {episodeCards}
      </div>
    </>
  )
}