import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './AppLayout/Layout'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Beauty from './pages/Beauty'
import Genz from './pages/Genz'
import Studio from './pages/Studio'

function App() {

  const Route = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement:<ErrorPage />,
      children:[
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/men',
          element: <Men />,
        },
        {
          path: '/women',
          element: <Women />,
        },
        {
          path: '/kids',
          element: <Kids />,
        },
        {
          path: '/home',
          element: <Home />,
        },
        {
          path: '/beauty',
          element: <Beauty />,
        },
        {
          path: '/genz',
          element: <Genz />,
        },
        {
          path: '/studio',
          element: <Studio />,
        },
      ]
    }
  ])


  return (
    <>
      <RouterProvider router={Route} />
    </>
  )
}

export default App
