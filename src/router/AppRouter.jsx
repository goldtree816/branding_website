import ProjectDetails from '../pages/project-details.jsx'
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import Services from "../pages/services.jsx";
import About from "../pages/about.jsx";
import Resources from "../pages/resources.jsx";
import Blog from "../pages/blog.jsx";
import Portfolio from "../pages/portfolio.jsx";
import Home from "../pages/home.jsx";
import Blog1 from "../components/blog1.jsx";
import Service_mobile from "../components/service_mobile.jsx";
import Service_online from "../components/service_online.jsx";
import Service_farm from "../components/service_farm.jsx";
import Service_agriculture from "../components/service_agriculture.jsx";
import Service_farmstory from "../components/service_farmstory.jsx";
import Service_future from "../components/service_future.jsx";

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
      { path: "/", element: <Home /> },
      { path: "/services", element: <Services /> },
      { path: "/portfolio", element: <Portfolio /> },
       {
          path: "/portfolio/:projectSlug",
          element: <ProjectDetails />
        },

      { path: "/about", element: <About /> },
      { path: "/blog", element: <Blog /> },
      { path: "/resources", element: <Resources /> },
      { path: "/srs_digital", element: <Home /> },
      { path: "/blog1", element: <Blog1 /> },
      { path: "/farm", element: <Service_farm /> },
      { path: "/agriculture", element: <Service_agriculture /> },
      { path: "/online", element: <Service_online /> },
      { path: "/mobile", element: <Service_mobile /> },
      { path: "/story", element: <Service_farmstory /> },
      { path: "/future", element: <Service_future /> },
    ],
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;