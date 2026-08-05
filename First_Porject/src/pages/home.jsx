import Hero from '../pages/hero.jsx'
import Client from '../components/client.jsx'
import Testimonial from '../components/testimonial.jsx'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

function Home() {
  return (
    <>
      <Hero />
      <Client />
      <Testimonial />
    </>
  );
}

export default Home;