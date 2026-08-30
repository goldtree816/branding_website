import React from "react";
import "../styles/resources.css";

import TryCard from "../components/ResourceCard1.jsx";
import Free_Down from "../components/free.jsx";

import logo1 from "../assets/pp.webp";

import free1 from "../assets/free1.png";
import free2 from "../assets/free2.png";
import free3 from "../assets/free3.png";

// FARMER WEB RESOURCE IMAGES
import BPD from "../assets/Brand And Product design.png";
import BVI from "../assets/Business Visual Identity.png";
import PB from "../assets/PRODUCT BRANDING.png";
import BLB from "../assets/Business And Lifestyle Branding.png";
import CC from "../assets/Content Creation.png";
import BG from "../assets/Business Growth.png";
import BS from "../assets/Brand Strategy.png";
import MR from "../assets/Marketing Resources.png";
import CR from "../assets/Creative Resources.png";
import AM from "../assets/Audio And Media.png";
import DBT from "../assets/Digital Business Tool.png";

// =========================================================
// FARMER WEB RESOURCE DATA
// =========================================================

const farmerResources = [
  {
    image: BPD,
    title: "CROP PRODUCTION",
    description:
      "Learn about crop selection, planting methods, cultivation practices, harvesting, and other important steps for producing healthy and productive crops.",
  },

  {
    image: BVI,
    title: "SOIL HEALTH & MANAGEMENT",
    description:
      "Understand soil types, soil preparation, organic matter, nutrients, and sustainable practices that help maintain healthy and productive farmland.",
  },

  {
    image: PB,
    title: "SEEDS & CROP SELECTION",
    description:
      "Explore useful information about selecting suitable seeds and crops based on local conditions, growing seasons, soil requirements, and farming goals.",
  },

  {
    image: BLB,
    title: "PEST & DISEASE MANAGEMENT",
    description:
      "Identify common crop pests and diseases and learn about practical prevention and management techniques to protect crops and reduce production losses.",
  },

  {
    image: CC,
    title: "FARMING TECHNIQUES",
    description:
      "Discover modern and sustainable farming techniques that can help farmers improve productivity, use resources efficiently, and manage their farms more effectively.",
  },

  {
    image: BG,
    title: "IRRIGATION & WATER MANAGEMENT",
    description:
      "Learn about efficient irrigation methods, water conservation, and proper water management practices to support healthy crops while reducing unnecessary water use.",
  },

  {
    image: BS,
    title: "WEATHER & SEASONAL INFORMATION",
    description:
      "Access useful information about weather conditions, seasons, rainfall, and climate patterns to help farmers plan planting, irrigation, harvesting, and crop protection.",
  },

  {
    image: MR,
    title: "MARKET & PRICE INFORMATION",
    description:
      "Explore agricultural market information, product prices, demand, and selling opportunities to help farmers make better decisions about where and when to sell their produce.",
  },

  {
    image: CR,
    title: "LIVESTOCK & ANIMAL CARE",
    description:
      "Find practical resources about livestock management, animal nutrition, housing, hygiene, and general care for healthier and more productive farm animals.",
  },

  {
    image: AM,
    title: "ORGANIC & SUSTAINABLE FARMING",
    description:
      "Learn about environmentally responsible farming practices such as composting, natural soil improvement, crop rotation, and responsible use of agricultural resources.",
  },

  {
    image: DBT,
    title: "DIGITAL FARMING TOOLS",
    description:
      "Discover digital tools and technologies that can help farmers monitor crops, organize farm activities, access information, track resources, and make better farming decisions.",
  },
];

// =========================================================
// RESOURCES COMPONENT
// =========================================================

const Resources = () => {
  return (
    <>
      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="R-intro">

        <div className="vid">
          <img
            src={logo1}
            alt="Farmer Web agricultural resources"
          />
        </div>

        <h1>
          FARMING RESOURCES
        </h1>

        <p>
          Access useful agricultural resources designed to help farmers
          make better decisions throughout the farming process. From crop
          production and soil management to weather information, pest
          control, livestock care, market information, and digital farming
          tools, Farmer Web brings important knowledge together in one
          place.
        </p>

      </section>


      {/* =====================================================
          FARMER RESOURCE CARDS
      ===================================================== */}

      <section className="business-resources-section">

        <div className="business-resources-grid">

          {farmerResources.map((resource, index) => (
            <TryCard
              key={index}
              image={resource.image}
              title={resource.title}
              description={resource.description}
            />
          ))}

        </div>

      </section>


      {/* =====================================================
          FREE RESOURCES HEADING
      ===================================================== */}

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


      {/* =====================================================
          FREE DOWNLOAD CARDS
      ===================================================== */}

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
};

export default Resources;