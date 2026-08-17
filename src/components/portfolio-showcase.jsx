import { useRef } from "react";
import "../styles/portfolio-showcase.css";

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


function PortfolioShowcase() {

  const trackRef = useRef(null);


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


  const scrollRight = () => {

    if (trackRef.current) {

      trackRef.current.scrollBy({
        left: 330,
        behavior: "smooth",
      });

    }

  };


  return (

    <section className="portfolio-showcase">

      <div
        className="portfolio-showcase-track"
        ref={trackRef}
      >

        {projects.map((project, index) => (

          <div
            className="portfolio-showcase-item"
            key={index}
          >

            <img
              src={project.image}
              alt={project.name}
            />

          </div>

        ))}

      </div>


      {/* SIDE SCROLL ARROW */}

      <button
        className="showcase-scroll-arrow"
        onClick={scrollRight}
        aria-label="Scroll projects"
      >
        →
      </button>

    </section>

  );
}


export default PortfolioShowcase;