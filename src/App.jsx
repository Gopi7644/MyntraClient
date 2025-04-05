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
import Profile from './pages/Profile'
import Wishlist from './pages/Wishlist'
import Bag from './pages/Bag'
import TestPage from './pages/TestPage'
import SubCategoryOne from './SubCategoryPages/SubCategoryOne'
import Longin from './SubCategoryPages/Login'
import Feedback from './pages/Feedback'
import UserDashBoard from './components/userDashBoard'

function App() {

  const Route = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
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
        {
          path: '/profile',
          element: <Profile />,
        },
        {
          path: '/wishlist',
          element: <Wishlist />,
        },
        {
          path: '/bag',
          element: <Bag />,
        },
        {
          path: '/test',
          element: <TestPage />,

        },
        {
          path: '/men/t-shirts',
          element: <SubCategoryOne />,
        },
        {
          path: '/login',
          element: <Longin />,
        },
        {
          path: '/contact',
          element: <Feedback />,
        },
        {
          path: '/userDashboard',
          element: <UserDashBoard />,
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
