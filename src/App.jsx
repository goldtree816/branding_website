import "./App.css";
import Navbar from './components/navbar.jsx'
import Hero from './pages/hero.jsx'
import Footer from './components/footer.jsx'
import Services from './pages/services.jsx'
import About from './pages/about.jsx'
import Contact from './pages/contact.jsx'
import Process from './pages/process.jsx'
import Portfolio from './pages/portfolio.jsx'
import Client from './components/client.jsx'
import Testimonial from './components/testimonial.jsx'
import Home from './pages/home.jsx'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

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
      { path: "/", element: <><Home /></> },
      { path: "/services", element: <Services /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/about", element: <About /> },
      { path: "/process", element: <Process /> },
      { path: "/contact", element: <Contact /> },
      { path: "/srs_digital", element: <Home />},
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
//awdsadwawdvahdwad
//aihkjwgdiubwaadhdwad