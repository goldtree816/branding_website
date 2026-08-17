import "../styles/portfolio-project.css";

import fashionImg from "../assets/fashion.png";
import wellnessImg from "../assets/wellness.png";
import photographyImg from "../assets/photography.png";
import weddingImg from "../assets/wedding.png";
import coffeeImg from "../assets/coffee.png";
import fitnessImg from "../assets/fitness.png";
import travelImg from "../assets/travel.png";
import dentalImg from "../assets/dental.png";
import startupImg from "../assets/startup.png";
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
      image: fashionImg,
      name: "Boutique Fashion Label",
    },

    {
      image: wellnessImg,
      name: "Luxury Wellness Brand",
    },

    {
      image: photographyImg,
      name: "Photography Studio",
    },

    {
      image: weddingImg,
      name: "Wedding Planning Studio",
    },

    {
      image: coffeeImg,
      name: "Artisan Coffee House",
    },

    {
      image: fitnessImg,
      name: "Elite Fitness Club",
    },

    {
      image: travelImg,
      name: "Travel Experience",
    },

    {
      image: dentalImg,
      name: "Modern Dental Studio",
    },

    {
      image: startupImg,
      name: "NovaTech Solutions",
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

        <span>FEATURED PROJECTS</span>

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