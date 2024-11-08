import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Country from "./pages/Country"

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from "./components/Layout/Layout"
import ErrorPage from "./pages/ErrorPage"
import CountryDetails from "./components/Layout/CountryDetails"

const router = createBrowserRouter([

  {
    path:"/",
    element:<Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path:"/",
        element:<Home />
      },
      {
        path:"about", 
        element:<About />
      },
      {
        path:"contact",
        element:<Contact />
      },
      {
        path:"country",
        element:<Country />
      },
      {
        path:"country/:id",
        element:<CountryDetails />
      } 
    ]

  }
  
])
function App() {

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
