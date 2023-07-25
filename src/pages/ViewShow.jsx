import Carousel from "../components/Carousel";
import EpisodesContainer from '../components/EpisodesContainer'

export default function ViewShow(props) {

  const { showId } = props;
  const [ show, setShow ] = useState();
  const [ currentSeason, setCurrentSeason ] = useState();
  const [ isOpen, setIsOpen ] = useState(false);

  useEffect(() => {
    fetch(`https://podcast-api.netlify.app/id/${showId}`)
      .then(response => response.json())
      .then(showData => setShow(showData))
  }, [showId])

  if(!show) {
    return <h1>Loading...</h1>
  }

  // If isOpen is false, just open episode and set to false ✅
  // If isOpen is already true, then check if current is same as clicked ✅
  // if same, set isOpen to false then set current season to null ✅
  // If not same, leave isOpen but set currentSeason to season of just clicked ✅
  // Show episodes conditionally if isOpen is true ✅
  // Show episodes by passing it currentshow season ✅

  const seasonVisibilityHandler = (seasonNum) => {
    if (!isOpen) {
      setCurrentSeason(seasonNum);
      setIsOpen(true);
    }

    if (currentSeason === seasonNum) {
      setIsOpen(false);
      setCurrentSeason(null);
    } else {
      setCurrentSeason(seasonNum)
    }
  }

  const seasonCards = show.seasons.map((season) => {
    return (
      <div key={season.season} onClick={() => {
        seasonVisibilityHandler(season.season)
      }} className="bg-dark-green h-full aspect-square text-center text-mint-cream">
        <h2>{season.title}</h2>
        <h3>{season.episodes.length} Episodes</h3>
      </div>
    )
  })

  return (
    <>
      <figure className="flex items-center h-[36vh] bg-dark-green text-mint-cream font-extrabold px-4 justify-around">
        <img src={show.image} alt={`${show.title} cover image`} className="h-28 shadow-[4px_4px_4px_0px_#F6F6F6]"/>
        <h1>{show.title}</h1>
      </figure>
      <p className="px-4 py-8 text-center text-sm text-dark-green">{show.description}</p>
      <Carousel name="Seasons" cards={seasonCards} />
      {isOpen && <EpisodesContainer extractedSeason={show.seasons.filter((season) => {
        return season.season === currentSeason;
      })}/>}
    </>
  )
}