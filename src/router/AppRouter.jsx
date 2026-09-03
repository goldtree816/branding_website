import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import Services from "../pages/services.jsx";
import About from "../pages/about.jsx";
import Resources from "../pages/resources.jsx";
import Home from "../pages/home.jsx";
import DetailPage from "../components/DetailPage.jsx";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/services",
        element: <Services />,
      },

      {
        path: "/services/:service",
        element: <DetailPage />,
      },

      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/resources",
        element: <Resources />,
      },

      {
        path: "/srs_digital",
        element: <Home />,
      },
    ],
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;