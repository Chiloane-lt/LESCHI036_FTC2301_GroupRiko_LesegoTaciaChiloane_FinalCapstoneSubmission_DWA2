import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Featured from '../components/FeaturedCard'
import GenreCards from '../components/GenreCards'
import PreviewsLayout from '../layouts/PreviewsLayout'

import { useLoaderData } from 'react-router-dom'
import FeaturedCarousel from '../components/FeaturedCarousel'

export default function Home() {
  const shows = useLoaderData();

  return (
    <>
      <NavBar/>
      <Hero />
      <FeaturedCarousel/>
      <GenreCards />
      <PreviewsLayout shows={shows}/>
    </>
  )
}

// loader function to fetch data

export const showsLoader = async () => {
  const response = await fetch('https://podcast-api.netlify.app/shows')
  return response.json()
}