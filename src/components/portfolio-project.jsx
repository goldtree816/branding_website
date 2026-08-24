import "../styles/portfolio-project.css";
import { Link } from "react-router-dom";

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


function PortfolioProjects() {

  const projects = [

    {
      image: earbud,
      name: "Gold Tree Earbuds",
      slug: "gold-tree-earbuds"
    },

    {
      image: chasma,
      name: "Gold Tree Sunglasses",
      slug: "gold-tree-sunglasses"
    },

    {
      image: honey,
      name: "Gold Tree Honey",
      slug: "gold-tree-honey"
    },

    {
      image: ladiesbag,
      name: "Gold Tree Bags",
      slug: "gold-tree-bags"
    },

    {
      image: coffeeImg,
      name: "Gold Tree Coffee",
      slug: "gold-tree-coffee"
    },

    {
      image: protein,
      name: "Gold Tree Whey Protein",
      slug: "gold-tree-whey-protein"
    },

    {
      image: skincare,
      name: "Gold Tree Skincare ",
      slug: "gold-tree-skincare"
    },

    {
      image: tea,
      name: "Gold Tree Tea",
      slug: "gold-tree-tea"
    },

    {
      image: headphone,
      name: "Gold Tree Headphone",
      slug: "gold-tree-headphone"
    },

    {
      image: speaker,
      name: "Gold Tree Speaker",
      slug: "independent-skincare-line",
    },

    {
      image: mouse,
      name: "Gold Tree Mouse",
      slug: "my-home-designed",
    },

    {
      image: printer,
      name: "Gold Tree Printer",
      slug: "nofo-events",
    },

    {
      image: fan,
      name: "Gold Tree Portable Fan",
      slug: "birthwell",
    },

    {
      image: lamp,
      name: "Gold Tree Lamp",
      slug: "ascend-aesthetics",
    },

    {
      image: pbank,
      name: "Gold Tree Power Bank",
      slug: "interior-design",
    },

    {
      image: charger,
      name: "Gold Tree Charger",
      slug: "uncontained",
    },

    {
      image: router,
      name: "Gold Tree Router",
      slug: "balanced-living-co",
    },

    {
      image: beacon,
      name: "Gold Tree Beacon",
      slug: "majestic-healing",
    },

  ];


  return (

    <section className="featured-projects">

      {/* 
          SECTION TITLE
       */}

      <div className="featured-projects-heading">

        <span>FEATURED PRODUCTS</span>

      </div>


      {/* 
          PROJECT GRID
       */}

      <div className="featured-projects-grid">

        {projects.map((project) => (

          <Link
            to={`/portfolio/${project.slug}`}
            className="featured-project-card"
            key={project.slug}
          >

            {/* PROJECT IMAGE */}

            <div className="featured-project-image">

              <img
                src={project.image}
                alt={project.name}
              />

            </div>


            {/* PROJECT NAME */}

            <h2>
              {project.name}
            </h2>

          </Link>

        ))}

      </div>

    </section>

  );

}


export default PortfolioProjects;