import { Outlet } from 'react-router-dom'

import NavBar from '../components/NavBar'
import AudioPlayer from '../components/AudioPlayer'

export default function RootLayout() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      {/* Conditionally render based on whether audio in global state is on or not. */}
      <AudioPlayer />
    </>
  )
}