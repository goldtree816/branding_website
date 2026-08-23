import "../styles/portfolio-project.css";

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
    },

    {
      image: chasma,
      name: "Gold Tree Sunglasses",
    },

    {
      image: honey,
      name: "Gold Tree Honey",
    },

    {
      image: ladiesbag,
      name: "Gold Tree Bags",
    },

    {
      image: coffeeImg,
      name: "Gold Tree Coffee",
    },

    {
      image: protein,
      name: "Gold Tree Whey Protein",
    },

    {
      image: skincare,
      name: "Gold Tree Skincare ",
    },

    {
      image: tea,
      name: "Gold Tree Tea",
    },

    {
      image: headphone,
      name: "Gold Tree Headphone",
    },

    {
      image: skincareImg,
      name: "Independent Skincare Line",
    },

    {
      image: myhomeDesigned,
      name: "My Home Designed",
    },

    {
      image: nofoevents,
      name: "NOFO Events",
    },

    {
      image: birthwell,
      name: "Birthwell",
    },

    {
      image: ascend,
      name: "Ascend Aesthetics",
    },

    {
      image: interior,
      name: "Interior Design",
    },

    {
      image: uncontained,
      name: "Uncontained",
    },

    {
      image: balancedlivingCO,
      name: "Balanced Living Co.",
    },

    {
      image: majestichealing,
      name: "Majestic Healing",
    },

  ];


  return (

    <section className="featured-projects">

      {/* SECTION TITLE */}

      <div className="featured-projects-heading">

        <span>FEATURED PRODUCTS</span>

      </div>


      {/* PROJECT GRID */}

      <div className="featured-projects-grid">

        {projects.map((project, index) => (

          <article
            className="featured-project-card"
            key={index}
          >

            <div className="featured-project-image">

              <img
                src={project.image}
                alt={project.name}
              />

            </div>


            <h2>
              {project.name}
            </h2>

          </article>

        ))}

      </div>

    </section>

  );

}


export default PortfolioProjects;