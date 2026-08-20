import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import Services from "../pages/services.jsx";
import About from "../pages/about.jsx";
import Resources from "../pages/resources.jsx";
import Blog from "../pages/blog.jsx";
import Portfolio from "../pages/portfolio.jsx";
import Home from "../pages/home.jsx";
import Blog1 from "../components/blog1.jsx";
import Service_sunglass from "../components/service_sunglass.jsx";
import Service_ladiesbag from "../components/service_ladiesbag.jsx";
import Service_earbud from "../components/service_earbug.jsx";
import Service_honey from "../components/service_honey.jsx";

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
      { path: "/about", element: <About /> },
      { path: "/blog", element: <Blog /> },
      { path: "/resources", element: <Resources /> },
      { path: "/srs_digital", element: <Home /> },
      { path: "/blog1", element: <Blog1 /> },
      { path: "/service_sunglass", element: <Service_sunglass /> },
      { path: "/service_ladiesbag", element: <Service_ladiesbag /> },
      { path: "/service_earbud", element: <Service_earbud /> },
      { path: "/service_honey", element: <Service_honey /> },
    ],
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;