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

import speaker from "../assets/g_speakers.png";
import mouse from "../assets/g_mouse.png";
import printer from "../assets/g_print.png";
import fan from "../assets/g_fan.png";
import lamp from "../assets/g_lamp.png";
import pbank from "../assets/g_pbank.png";
import charger from "../assets/g_charger.png";
import router from "../assets/g_router.png";
import beacon from "../assets/g_beacon.png";


function ProjectDetails() {

  const { projectSlug } = useParams();


  const projects = {

    "gold-tree-earbuds": {
      name: "Gold Tree Earbuds",
      category: "PRODUCT DESIGN",
      image: earbud,
      description:
        "Gold Tree Earbuds combine premium sound, modern design and everyday comfort into a refined audio experience.",
      services: [
        "Product Branding",
        "Visual Design",
        "Product Presentation"
      ]
    },

    "gold-tree-sunglasses": {
      name: "Gold Tree Sunglasses",
      category: "PRODUCT DESIGN",
      image: chasma,
      description:
        "A premium sunglasses concept created with a sophisticated visual identity and a modern lifestyle-focused presentation.",
      services: [
        "Product Branding",
        "Visual Design",
        "Creative Direction"
      ]
    },

    "gold-tree-honey": {
      name: "Gold Tree Honey",
      category: "PRODUCT DESIGN",
      image: honey,
      description:
        "Gold Tree Honey presents a premium natural product through elegant packaging and a warm, refined visual direction.",
      services: [
        "Packaging Design",
        "Product Branding",
        "Visual Design"
      ]
    },

    "gold-tree-bags": {
      name: "Gold Tree Bags",
      category: "PRODUCT DESIGN",
      image: ladiesbag,
      description:
        "A luxury handbag concept designed around elegance, simplicity and a premium lifestyle aesthetic.",
      services: [
        "Product Branding",
        "Visual Design",
        "Creative Direction"
      ]
    },

    "gold-tree-coffee": {
      name: "Gold Tree Coffee",
      category: "PRODUCT DESIGN",
      image: coffeeImg,
      description:
        "A premium coffee product concept combining sophisticated packaging with a warm and inviting brand experience.",
      services: [
        "Packaging Design",
        "Brand Identity",
        "Product Presentation"
      ]
    },

    "gold-tree-whey-protein": {
      name: "Gold Tree Whey Protein",
      category: "PRODUCT DESIGN",
      image: protein,
      description:
        "A modern sports nutrition product designed to communicate strength, quality and performance.",
      services: [
        "Product Branding",
        "Packaging Design",
        "Visual Design"
      ]
    },

    "gold-tree-skincare": {
      name: "Gold Tree Skincare",
      category: "PRODUCT DESIGN",
      image: skincare,
      description:
        "A premium skincare concept focused on clean presentation, refined packaging and a sophisticated beauty aesthetic.",
      services: [
        "Brand Identity",
        "Packaging Design",
        "Product Presentation"
      ]
    },

    "gold-tree-tea": {
      name: "Gold Tree Tea",
      category: "PRODUCT DESIGN",
      image: tea,
      description:
        "A refined tea product concept designed to communicate natural quality and a premium everyday experience.",
      services: [
        "Packaging Design",
        "Brand Identity",
        "Visual Design"
      ]
    },

    "gold-tree-headphone": {
      name: "Gold Tree Headphone",
      category: "PRODUCT DESIGN",
      image: headphone,
      description:
        "A premium headphone concept combining modern technology with an elegant and sophisticated product presentation.",
      services: [
        "Product Branding",
        "Visual Design",
        "Creative Direction"
      ]
    },

    "gold-tree-speaker": {
      name: "Gold Tree Speaker",
      category: "PRODUCT DESIGN",
      image: speaker,
      description:
        "A contemporary speaker concept designed around premium technology, clean aesthetics and modern lifestyle.",
      services: [
        "Product Branding",
        "Product Presentation",
        "Visual Design"
      ]
    },

    "gold-tree-mouse": {
      name: "Gold Tree Mouse",
      category: "PRODUCT DESIGN",
      image: mouse,
      description:
        "A modern computer mouse concept designed to combine ergonomic functionality with a premium visual identity.",
      services: [
        "Product Branding",
        "Visual Design",
        "Creative Direction"
      ]
    },

    "gold-tree-printer": {
      name: "Gold Tree Printer",
      category: "PRODUCT DESIGN",
      image: printer,
      description:
        "A modern printer concept presented through a clean and sophisticated product-focused visual direction.",
      services: [
        "Product Branding",
        "Visual Design",
        "Product Presentation"
      ]
    },

    "gold-tree-portable-fan": {
      name: "Gold Tree Portable Fan",
      category: "PRODUCT DESIGN",
      image: fan,
      description:
        "A compact portable fan concept designed around convenience, modern technology and clean product aesthetics.",
      services: [
        "Product Branding",
        "Visual Design",
        "Product Presentation"
      ]
    },

    "gold-tree-lamp": {
      name: "Gold Tree Lamp",
      category: "PRODUCT DESIGN",
      image: lamp,
      description:
        "A contemporary lighting concept designed to bring together functionality, elegance and modern interior aesthetics.",
      services: [
        "Product Branding",
        "Visual Design",
        "Creative Direction"
      ]
    },

    "gold-tree-power-bank": {
      name: "Gold Tree Power Bank",
      category: "PRODUCT DESIGN",
      image: pbank,
      description:
        "A compact power bank concept designed with portability, functionality and premium visual presentation in mind.",
      services: [
        "Product Branding",
        "Product Presentation",
        "Visual Design"
      ]
    },

    "gold-tree-charger": {
      name: "Gold Tree Charger",
      category: "PRODUCT DESIGN",
      image: charger,
      description:
        "A modern charging accessory concept combining practical functionality with a clean and premium appearance.",
      services: [
        "Product Branding",
        "Visual Design",
        "Product Presentation"
      ]
    },

    "gold-tree-router": {
      name: "Gold Tree Router",
      category: "PRODUCT DESIGN",
      image: router,
      description:
        "Gold Tree Routers deliver high-speed, stable connectivity for smooth streaming, gaming and work — keeping you connected to what matters most.",
      services: [
        "Product Branding",
        "Product Presentation",
        "Visual Design"
      ]
    },

    "gold-tree-beacon": {
      name: "Gold Tree Beacon",
      category: "PRODUCT DESIGN",
      image: beacon,
      description:
        "A modern beacon product concept designed with a premium technology-focused visual identity.",
      services: [
        "Product Branding",
        "Visual Design",
        "Creative Direction"
      ]
    }

  };


  const project = projects[projectSlug];


  // PROJECT NOT FOUND

  if (!project) {

    return (

      <main className="project-details-page">

        <div className="project-details-content">

          <p>PROJECT NOT FOUND</p>

          <h1>Project Not Found</h1>

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


      {/* HERO */}

      <section className="project-details-hero">

        <div className="project-details-heading">

          <p className="project-details-category">
            {project.category}
          </p>

          <h1>
            {project.name}
          </h1>

        </div>


        {/* PROJECT IMAGE */}

        <div className="project-details-image">

          <img
            src={project.image}
            alt={project.name}
          />

        </div>

      </section>


      {/* INFORMATION */}

      <section className="project-details-info">


        {/* DESCRIPTION */}

        <div className="project-details-description">

          <p className="project-details-label">
            ABOUT THE PROJECT
          </p>

          <h2>
            {project.name}
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


      {/* BACK BUTTON */}

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