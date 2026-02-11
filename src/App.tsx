import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Layout/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Academics from "./pages/Academics"


const App = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                { index: true, element:<Home />},
                {path: '/about', element: <About />},
                {path: '/academics', element: <Academics />},
            ]
        }
    ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
