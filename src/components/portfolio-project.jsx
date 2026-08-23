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
import skincareImg from "../assets/skincare.png";

import myhomeDesigned from "../assets/myhomeDesigned.png";
import nofoevents from "../assets/nofoevents.png";
import birthwell from "../assets/birthwell.png";
import ascend from "../assets/ascend.png";
import interior from "../assets/interior.png";
import uncontained from "../assets/uncontained.png";
import balancedlivingCO from "../assets/balancedlivingCO.png";
import majestichealing from "../assets/majestichealing.png";


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
      slug: "gold-tree-whey protein"
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
      image: skincareImg,
      name: "Independent Skincare Line",
      slug: "independent-skincare-line",
    },

    {
      image: myhomeDesigned,
      name: "My Home Designed",
      slug: "my-home-designed",
    },

    {
      image: nofoevents,
      name: "NOFO Events",
      slug: "nofo-events",
    },

    {
      image: birthwell,
      name: "Birthwell",
      slug: "birthwell",
    },

    {
      image: ascend,
      name: "Ascend Aesthetics",
      slug: "ascend-aesthetics",
    },

    {
      image: interior,
      name: "Interior Design",
      slug: "interior-design",
    },

    {
      image: uncontained,
      name: "Uncontained",
      slug: "uncontained",
    },

    {
      image: balancedlivingCO,
      name: "Balanced Living Co.",
      slug: "balanced-living-co",
    },

    {
      image: majestichealing,
      name: "Majestic Healing",
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