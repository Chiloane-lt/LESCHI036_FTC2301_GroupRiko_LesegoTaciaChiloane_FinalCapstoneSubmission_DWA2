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
import ErrorPage from './pages/ErrorPage'
import Favourites from './pages/Favourites'
import User from './pages/User'
import ShowLayout, { showDetailsLoader } from "./layouts/ShowLayout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/Signup";

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
      <Route path='signup' element={<SignUp/>}/>
      <Route path='signin' element={<SignIn/>}/>
      <Route path='*' element={<ErrorPage />}/>
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
