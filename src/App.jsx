/**
 * TO-DO:
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
 */

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"

import { AuthContext } from "./hooks/AuthContext"

// Restricted routes
import AnonRoute from "./layouts/AnonRoute"
import AuthRoute from "./layouts/AuthRoute"

// pages
import Landing from "./pages/Landing"
import Home, { showsLoader } from "./pages/Home"
import ErrorPage from "./pages/ErrorPage"
import Favourites from "./pages/Favourites"
import ShowPage, { showDetailsLoader } from "./pages/ShowPage"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/Signup"
import { useContext } from "react"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" exact element={<AnonRoute/>}>
        <Route index element={<Landing />}/>
        <Route path="signup" element={<SignUp />}/>
        <Route path="signin" element={<SignIn />}/>
      </Route>
      <Route path='/home' exact element={<AuthRoute/>}>
        <Route index element={<Home />} loader={showsLoader}/>
        <Route path="show/:id" exact element={<ShowPage />}
        loader={showDetailsLoader} />
        <Route />
        <Route path="favourites" exact element={<Favourites />}/>
        <Route path="*" element={<ErrorPage />}/>
      </Route>
    </Route>
  )
)

function App() {
  const [auth] = useContext(AuthContext)

  return <RouterProvider router={router} />
}

export default App
