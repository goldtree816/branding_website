import React from "react";
import "../styles/resources.css";

import TryCard from "../components/ResourceCard1.jsx";
import Free_Down from "../components/free.jsx";

import logo1 from "../assets/pp.webp";

import free1 from "../assets/free1.png";
import free2 from "../assets/free2.png";
import free3 from "../assets/free3.png";

// GOLDTREE BUSINESS RESOURCE IMAGES
import BPD from "../assets/brand and product design.png";
import BVI from "../assets/business visual identity.png";
import PB from "../assets/product branding.png";
import BLB from "../assets/business and lifestyle branding.png";
import CC from "../assets/content creation.png";
import BG from "../assets/business growth.png";
import BS from "../assets/brand strategy.png";
import MR from "../assets/marketing resources.png";
import CR from "../assets/creative resources.png";
import AM from "../assets/audio and media.png";
import DBT from "../assets/digital business tool.png";


// 
// BUSINESS RESOURCE DATA
// 

const businessResources = [
  {
    image: BPD,
    title: "BRAND & PRODUCT DESIGN",
    description:
      "Build a strong and recognizable visual identity for your business with thoughtful branding, product presentation, and professional design resources.",
  },

  {
    image: BVI,
    title: "BUSINESS VISUAL IDENTITY",
    description:
      "Create a consistent visual style across your website, social media, marketing materials, and other important business touchpoints.",
  },

  {
    image: PB,
    title: "PRODUCT BRANDING",
    description:
      "Learn how strong product presentation, packaging, photography, and branding can help your products stand out and create a memorable customer experience.",
  },

  {
    image: BLB,
    title: "BUSINESS & LIFESTYLE BRANDING",
    description:
      "Helpful inspiration and resources for creating a polished lifestyle brand that communicates your personality, values, and products clearly.",
  },

  {
    image: CC,
    title: "CONTENT CREATION",
    description:
      "Create engaging content for your business and learn how to present your products and services professionally across different platforms.",
  },

  {
    image: BG,
    title: "BUSINESS GROWTH",
    description:
      "Explore useful ideas and resources for improving your business presence, attracting customers, and creating a stronger foundation for growth.",
  },

  {
    image: BS,
    title: "BRAND STRATEGY",
    description:
      "Understand the important elements of a successful brand and create a clear strategy that makes your business easier for customers to recognize.",
  },

  {
    image: MR,
    title: "MARKETING RESOURCES",
    description:
      "Discover practical resources and ideas that can help you promote your business, connect with your audience, and build a stronger online presence.",
  },

  {
    image: CR,
    title: "CREATIVE RESOURCES",
    description:
      "Explore creative resources designed to help you present your brand, products, and services with a professional visual style.",
  },

  {
    image: AM,
    title: "AUDIO & MEDIA",
    description:
      "Discover useful creative ideas and resources for presenting your business and creating engaging visual and media content.",
  },

  {
    image: DBT,
    title: "DIGITAL BUSINESS TOOLS",
    description:
      "Explore practical digital resources that can help you organize, manage, present, and grow your business more effectively.",
  },
];


// 
// RESOURCES COMPONENT
// 

const Resources = () => {
  return (
    <>

      {/* 
          HERO SECTION
       */}

      <section className="R-intro">

        <div className="vid">
          <img
            src={logo1}
            alt="GoldTree brand"
          />
        </div>

        <h1>
          BUSINESS RESOURCES
        </h1>

        <p>
          Here’s a list of some of our favorite business tools and
          resources that have been a huge help while starting up
          and continuing to run and grow a business. Everything on
          this list is a collection of useful resources for design,
          content creation, planning, organizing, learning, and
          business growth.
        </p>

      </section>


      {/* 
          BUSINESS RESOURCE CARDS
       */}

      <section className="business-resources-section">

        <div className="business-resources-grid">

          {businessResources.map((resource, index) => (
            <TryCard
              key={index}
              image={resource.image}
              title={resource.title}
              description={resource.description}
            />
          ))}

        </div>

      </section>


      {/* 
          FREE RESOURCES HEADING
       */}

      <section className="lines">

        <div className="line-1">

          <p>
            Please note some of these tools contain affiliate links
            where I may receive a small commission when you purchase
            through them at no extra cost to you!
          </p>

        </div>

        <div className="line-2">

          <h1>
            Free Brand & Website Design Resources
          </h1>

        </div>

      </section>


      {/* 
          FREE DOWNLOAD CARDS
       */}

      <section className="free-resources-section">

        <div className="free-container">

          <Free_Down
            image={free1}
            title="FREE DOWNLOAD: SERVICE-BASED BUSINESS WEBSITE BLUEPRINT"
            description="The free blueprint breaks down every page of your service website. Section by section, so you know exactly what belongs there and why."
          />

          <Free_Down
            image={free2}
            title="FREE DOWNLOAD: AUDIT YOUR WEBSITE GUIDE"
            description="Free resource to help you evaluate and enhance the performance of your current website. By conducting a website audit, you can identify and address any shortcomings or gaps in your site."
          />

          <Free_Down
            image={free3}
            title="FREE DOWNLOAD: BRANDING CHECKLIST"
            description="Whether you're struggling to gain clarity with your brand, completely starting from scratch, or if you're DIY and want to get it done right, this guide will help you understand what you need."
          />

        </div>

      </section>

    </>
  );
};

export default Resources;