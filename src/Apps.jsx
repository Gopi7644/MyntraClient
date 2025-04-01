import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./AppLayout/Layout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage"; // New Dynamic Page

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },

      // Dynamic Category Routes
      { path: "/:category", element: <CategoryPage /> },
      { path: "/:category/:subcategory", element: <CategoryPage /> },
    ],
  },
]);

function Apps() {
  return <RouterProvider router={Route} />;
}

export default Apps;
