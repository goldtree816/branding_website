import { useParams, Link } from "react-router-dom";
import "../styles/project-details.css";

import earbud from "../assets/b_earbud.png";
import chasma from "../assets/b_sunglasses.png";
import honey from "../assets/b_honey.png";
import ladiesbag from "../assets/b_ladiesbag.png";

import coffeeImg from "../assets/g_coffee.png";
import protein from "../assets/g_protein.png";
import skincare from "../assets/g_skincare.png";
import tea from "../assets/g_tea.png";
import headphone from "../assets/g_headphone.png";

import skincareImg from "../assets/skincare.png";

import myhomeDesigned from "../assets/myhomeDesigned.png";
import nofoevents from "../assets/nofoevents.png";
import birthwell from "../assets/birthwell.png";
import ascend from "../assets/ascend.png";
import interior from "../assets/interior.png";
import uncontained from "../assets/uncontained.png";
import balancedlivingCO from "../assets/balancedlivingCO.png";
import majestichealing from "../assets/majestichealing.png";


const projects = {

  /* 
     GOLD TREE PRODUCTS
   */

  "gold-tree-earbuds": {
    name: "Gold Tree Earbuds",
    image: earbud,
    category: "Product Design",
    description:
      "A premium product concept created for Gold Tree Earbuds. The project focuses on presenting the product through a clean, modern and visually appealing design.",
    services: [
      "Product Design",
      "Brand Identity",
      "Visual Design",
    ],
  },


  "gold-tree-sunglasses": {
    name: "Gold Tree Sunglasses",
    image: chasma,
    category: "Product Design",
    description:
      "A sophisticated visual presentation created for Gold Tree Sunglasses, focusing on a premium product experience and a clean modern aesthetic.",
    services: [
      "Product Design",
      "Brand Identity",
      "Visual Design",
    ],
  },


  "gold-tree-honey": {
    name: "Gold Tree Honey",
    image: honey,
    category: "Product Design",
    description:
      "A premium honey product concept designed to communicate quality through an elegant and visually engaging product presentation.",
    services: [
      "Product Design",
      "Packaging Design",
      "Brand Identity",
    ],
  },


  "gold-tree-bags": {
    name: "Gold Tree Bags",
    image: ladiesbag,
    category: "Fashion & Product",
    description:
      "A modern product presentation created for Gold Tree Bags, combining a premium visual direction with a clean and sophisticated product-focused layout.",
    services: [
      "Product Design",
      "Brand Identity",
      "Visual Design",
    ],
  },


  "gold-tree-coffee": {
    name: "Gold Tree Coffee",
    image: coffeeImg,
    category: "Food & Beverage",
    description:
      "A refined coffee product concept designed to create a premium and memorable visual identity while highlighting the product itself.",
    services: [
      "Product Design",
      "Packaging Design",
      "Branding",
    ],
  },


  "gold-tree-whey-protein": {
    name: "Gold Tree Whey Protein",
    image: protein,
    category: "Fitness & Nutrition",
    description:
      "A modern whey protein product concept created with a strong and clean visual direction that communicates an active and premium lifestyle.",
    services: [
      "Product Design",
      "Packaging Design",
      "Brand Identity",
    ],
  },


  "gold-tree-skincare": {
    name: "Gold Tree Skincare",
    image: skincare,
    category: "Beauty & Skincare",
    description:
      "A premium skincare product concept focused on elegant presentation, clean visual communication and a sophisticated brand experience.",
    services: [
      "Product Design",
      "Packaging Design",
      "Brand Identity",
    ],
  },


  "gold-tree-tea": {
    name: "Gold Tree Tea",
    image: tea,
    category: "Food & Beverage",
    description:
      "A premium tea product concept designed with a clean and sophisticated visual identity to create a memorable product presentation.",
    services: [
      "Product Design",
      "Packaging Design",
      "Branding",
    ],
  },


  "gold-tree-headphone": {
    name: "Gold Tree Headphone",
    image: headphone,
    category: "Technology & Product",
    description:
      "A modern headphone product concept created around a clean, premium and contemporary visual direction.",
    services: [
      "Product Design",
      "Brand Identity",
      "Visual Design",
    ],
  },


  /* 
     FEATURED PROJECTS
   */

  "independent-skincare-line": {
    name: "Independent Skincare Line",
    image: skincareImg,
    category: "Beauty & Skincare",
    description:
      "A refined skincare brand experience designed around simplicity, elegance and a premium product presentation.",
    services: [
      "Brand Identity",
      "Website Design",
      "Packaging",
    ],
  },


  "my-home-designed": {
    name: "My Home Designed",
    image: myhomeDesigned,
    category: "Interior Design",
    description:
      "A sophisticated digital experience created for My Home Designed, showcasing beautiful spaces through a clean and editorial visual direction.",
    services: [
      "Brand Identity",
      "Website Design",
      "Art Direction",
    ],
  },


  "nofo-events": {
    name: "NOFO Events",
    image: nofoevents,
    category: "Events",
    description:
      "A distinctive digital experience designed for NOFO Events, presenting the brand and its services through a clear and engaging visual experience.",
    services: [
      "Brand Identity",
      "Website Design",
      "UI/UX Design",
    ],
  },


  "birthwell": {
    name: "Birthwell",
    image: birthwell,
    category: "Wellness",
    description:
      "A thoughtful and welcoming digital experience designed to create a strong and trustworthy presence for the Birthwell brand.",
    services: [
      "Brand Identity",
      "Website Design",
      "UI/UX Design",
    ],
  },


  "ascend-aesthetics": {
    name: "Ascend Aesthetics",
    image: ascend,
    category: "Aesthetics & Beauty",
    description:
      "A premium visual identity and digital experience created for Ascend Aesthetics, with a focus on elegance, confidence and modern luxury.",
    services: [
      "Brand Identity",
      "Website Design",
      "Digital Experience",
    ],
  },


  "interior-design": {
    name: "Interior Design",
    image: interior,
    category: "Interior Design",
    description:
      "A visually refined digital experience designed to showcase interior spaces through a clean, editorial and image-led presentation.",
    services: [
      "Website Design",
      "UI/UX Design",
      "Art Direction",
    ],
  },


  "uncontained": {
    name: "Uncontained",
    image: uncontained,
    category: "Brand & Digital",
    description:
      "A distinctive brand experience designed to communicate a unique personality through bold visual direction and a modern digital interface.",
    services: [
      "Brand Identity",
      "Website Design",
      "UI/UX Design",
    ],
  },


  "balanced-living-co": {
    name: "Balanced Living Co.",
    image: balancedlivingCO,
    category: "Lifestyle & Wellness",
    description:
      "A calm and modern brand experience created for Balanced Living Co., with a focus on wellbeing, balance and a welcoming digital presence.",
    services: [
      "Brand Identity",
      "Website Design",
      "UI/UX Design",
    ],
  },


  "majestic-healing": {
    name: "Majestic Healing",
    image: majestichealing,
    category: "Wellness & Healing",
    description:
      "A warm and calming digital experience designed to communicate the values and services of Majestic Healing through an elegant visual identity.",
    services: [
      "Brand Identity",
      "Website Design",
      "Digital Experience",
    ],
  },

};


function ProjectDetails() {

  const { projectSlug } = useParams();

  const project = projects[projectSlug];


  /* 
     PROJECT NOT FOUND
   */

  if (!project) {

    return (
      <main className="project-details-page">

        <div className="project-details-content">

          <p>PROJECT NOT FOUND</p>

          <h1>
            Sorry, this project does not exist.
          </h1>

          <Link
            to="/portfolio"
            className="back-portfolio-btn"
          >
            ← Back to Portfolio
          </Link>

        </div>

      </main>
    );

  }


  return (

    <main className="project-details-page">

      {/* 
          PROJECT HERO
       */}

      <section className="project-details-hero">

        <div className="project-details-heading">

          <p className="project-details-category">
            {project.category}
          </p>

          <h1>
            {project.name}
          </h1>

        </div>


        <div className="project-details-image">

          <img
            src={project.image}
            alt={project.name}
          />

        </div>

      </section>


      {/* 
          PROJECT INFORMATION
       */}

      <section className="project-details-info">

        <div className="project-details-description">

          <p className="project-details-label">
            ABOUT THE PROJECT
          </p>

          <h2>
            Creating a meaningful digital experience.
          </h2>

          <p>
            {project.description}
          </p>

        </div>


        {/* SERVICES */}

        <div className="project-details-services">

          <p className="project-details-label">
            SERVICES
          </p>

          <div className="project-services-list">

            {project.services.map((service, index) => (

              <span key={index}>
                {service}
              </span>

            ))}

          </div>

        </div>

      </section>


      {/* 
          BACK TO PORTFOLIO
       */}

      <div className="project-details-back">

        <Link
          to="/portfolio"
          className="back-portfolio-btn"
        >
          ← Back to Portfolio
        </Link>

      </div>

    </main>

  );

}


export default ProjectDetails;