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
 */

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home"
import ErrorPage from "./pages/ErrorPage"
import Favourites from "./pages/Favourites"
import User from "./pages/User"
import ViewShow from './pages/ViewShow'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/favourites",
    element: <Favourites />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/show/:id",
    element: <ViewShow />,
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>

  )
}

export default App
