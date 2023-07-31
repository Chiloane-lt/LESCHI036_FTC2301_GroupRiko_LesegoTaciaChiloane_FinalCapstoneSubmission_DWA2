/**
 * TO-DO:
 * NB!!!!!! Add navbar to show view
 * Preview - Update preview styling
 * Preview - Match placeholder to actual preview
 * Preview - Shrink text with screen size
 * Preview - Improve above by fixing text wrap on small screens
 * Carousel - Increase width of area for arrows
 * Carousel - Check overscroll behaviour
 * App - useContext to pass theme & show data
 * App - useReducer to track state
 * App - Lazy load logging in & favourites
 * App - Add error catching for all fetch requests.
 * App - Prettier all files before shipping off
 * Unsubscribe from all API calls by retunring useEffect cleanups
 * App - Fix, Handle All Errors Error 404 page
 * Add JSDoc
 * Add comments
 * App - Use NavLink for NavBar
 * App - Check validation on ALL forms
 * Home - Change images to use jpeg
 * App - Fix restricted routes reroute snap
 * main - move useContext back to App.jsx
 * app - unsubscribe supabase on log out
 * Favourites - fix favourites render issue. Put inside useEffect with season as dependency
 */

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"

// Restricted routes
import AnonRoute from "./layouts/AnonRoute"
import AuthRoute, { showsLoader }from "./layouts/AuthRoute"

// pages
import Landing from "./pages/Landing"
import Home from "./pages/Home"
import ErrorPage from "./pages/ErrorPage"
import Favourites from "./pages/Favourites"
import ShowPage, { showDetailsLoader } from "./pages/ShowPage"
import SignUp from "./pages/SignUp"
import SignIn from './pages/SignIn'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" exact element={<AnonRoute />}>
        <Route index element={<Landing />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
      </Route>
      <Route path="/home" exact element={<AuthRoute />}>
        <Route index element={<Home />} loader={showsLoader} />
        <Route path="show/:id" exact element={<ShowPage />} loader={showDetailsLoader} />
        <Route />
        <Route path="favourites" exact element={<Favourites />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
