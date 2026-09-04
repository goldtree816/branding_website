import "../styles/home.css";
import Hero from '../pages/hero.jsx'

import Client from '../components/client.jsx'

import Testimonial from '../components/testimonial.jsx'

import smartFarm from '../assets/free1.jpg'
import free1 from "../assets/free1.jpg";
import free2 from "../assets/free2.jpg";
import free3 from "../assets/free3.jpg";

import Free_Down from "../components/free.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

function Home() {
  return (
    <>
      <Hero />
      <Client />
      <section className="smart-farming">

      <div className="smart-farming-image">
        <img src={smartFarm} alt="Smart Farming" />
      </div>

      <div className="smart-farming-content">
        <p className="smart-small">SMART FARMING</p>

        <h2>
          Technology That Helps
          <br />
          Farmers Grow Better
        </h2>

        <p>
          Smart farming combines modern technology with traditional farming
          practices to help farmers work more efficiently. From monitoring
          crops and managing resources to accessing useful agricultural
          information, digital tools can make everyday farming easier and more
          organized.
        </p>

        <p>
          With the right technology, farmers can make better decisions,
          reduce unnecessary costs, improve crop production, and respond
          quickly to changing farming conditions. Our goal is to provide
          simple and practical digital solutions that give farmers the
          confidence to grow and manage their farms for the future.
        </p>

        <button>LEARN MORE</button>
      </div>

    </section>
      <Testimonial />

      <section className="lines">

        <div className="line-1">

          <p>
            These resources are designed to provide farmers with simple,
            practical information that can support everyday farming
            activities and better agricultural decision-making.
          </p>

        </div>

        <div className="line-2">

          <h1>
            Free Farming Resources
          </h1>

        </div>

      </section>


      <section className="free-resources-section">

        <div className="free-container">

          <Free_Down
            image={free1}
            title="FREE DOWNLOAD: CROP PLANNING GUIDE"
            description="A simple guide to help farmers organize crop selection, planting schedules, cultivation activities, irrigation, and harvesting plans throughout the growing season."
          />

          <Free_Down
            image={free2}
            title="FREE DOWNLOAD: FARM MANAGEMENT CHECKLIST"
            description="A practical checklist for keeping track of important farm activities including soil preparation, seeds, fertilizers, irrigation, pest management, harvesting, and farm records."
          />

          <Free_Down
            image={free3}
            title="FREE DOWNLOAD: FARMER'S DAILY RECORD BOOK"
            description="Keep important farm information organized with a simple record-keeping guide for tracking expenses, crop activities, production, sales, inputs, and other daily farming activities."
          />

        </div>

      </section>
    </>
  );
}

export default Home;