import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./AppLayout/Layout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import CategoryPage from "./categoryPage/Category";
// import CategoryPage from "./pages/CategoryPage"; // New Dynamic Page

const Router = createBrowserRouter([
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

function Apps() {
  return <RouterProvider router={Router} />;
}

export default Apps;
