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
 * App - Fix (prettify) Error 404 page
 * Add JSDoc
 * Add comments
 * App - Use NavLink for NavBar
 */

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// layouts
import RootLayout from "./layouts/RootLayout";

// pages
import Home, { showsLoader } from './pages/Home'
import Favourites from './pages/Favourites'
import User from './pages/User'
import ShowLayout, { showDetailsLoader } from "./layouts/ShowLayout";

// loaders

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route
      index
      element={<Home/>}
      loader={showsLoader}
      />
        <Route path='show/:id'
        element={<ShowLayout/>}
        loader={showDetailsLoader}/>
      <Route/>
      <Route path='favourites' element={<Favourites/>} />
      <Route path='user' element={<User/>} />
    </Route>
  )
);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>

  )
}

export default App
