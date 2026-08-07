import "./App.css";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";

import Home from "./pages/home.jsx";
import Hero from "./pages/hero.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";

import Services from "./components/services.jsx";
import Portfolio from "./components/portfolio.jsx";
import Process from "./components/process.jsx";

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
      { path: "/process", element: <Process /> },
      { path: "/contact", element: <Contact /> },
      { path: "/srs_digital", element: <Hero /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;