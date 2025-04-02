import { createBrowserRouter } from "react-router-dom";
import Layout from "./AppLayout/Layout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },

      // Dynamic Category & Subcategory Routes
      { path: "/:category", element: <CategoryPage /> },
      { path: "/:category/:subcategory", element: <CategoryPage /> },
    ],
  },
]);

export default Route;







// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import './App.css'
// import Layout from './AppLayout/Layout'
// import ErrorPage from './pages/ErrorPage'
// import Home from './pages/Home'
// import Men from './pages/Men'
// import Women from './pages/Women'
// import Kids from './pages/Kids'
// import Beauty from './pages/Beauty'
// import Genz from './pages/Genz'
// import Studio from './pages/Studio'
// import Profile from './pages/Profile'
// import Wishlist from './pages/Wishlist'
// import Bag from './pages/Bag'
// import TestPage from './pages/TestPage'
// import SubCategoryOne from './SubCategoryPages/SubCategoryOne'
// import Longin from './SubCategoryPages/Login'

// function App() {

//   const Route = createBrowserRouter([
//     {
//       path: '/',
//       element: <Layout />,
//       errorElement: <ErrorPage />,
//       children: [
//         {
//           path: '/',
//           element: <Home />,
//         },
//         {
//           path: '/men',
//           element: <Men />,
//         },
//         {
//           path: '/women',
//           element: <Women />,
//         },
//         {
//           path: '/kids',
//           element: <Kids />,
//         },
//         {
//           path: '/home',
//           element: <Home />,
//         },
//         {
//           path: '/beauty',
//           element: <Beauty />,
//         },
//         {
//           path: '/genz',
//           element: <Genz />,
//         },
//         {
//           path: '/studio',
//           element: <Studio />,
//         },
//         {
//           path: '/profile',
//           element: <Profile />,
//         },
//         {
//           path: '/wishlist',
//           element: <Wishlist />,
//         },
//         {
//           path: '/bag',
//           element: <Bag />,
//         },
//         {
//           path: '/test',
//           element: <TestPage />,
//         },
//         {
//           path: '/men/t-shirts',
//           element: <SubCategoryOne />,
//         },
//         {
//           path: '/login',
//           element: <Longin />,
//         },
//       ]
//     }
//   ])


//   return (
//     <>
//       <RouterProvider router={Route} />
//     </>
//   )
// }

// export default App
