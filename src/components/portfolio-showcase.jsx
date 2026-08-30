import { useRef } from "react";
import "../styles/portfolio-showcase.css";

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


function PortfolioShowcase() {

  const trackRef = useRef(null);


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
      name: "Gold Tree Skincare",
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
      image: speaker,
      name: "Gold Tree Speaker",
    },

    {
      image: mouse,
      name: "Gold Tree Mouse",
    },

    {
      image: printer,
      name: "Gold Tree Printer",
    },

    {
      image: fan,
      name: "Gold Tree Portable Fan",
    },

    {
      image: lamp,
      name: "Gold Tree Lamp",
    },

    {
      image: pbank,
      name: "Gold Tree Power Bank",
    },

    {
      image: charger,
      name: "Gold Tree Charger",
    },

    {
      image: router,
      name: "Gold Tree Router",
    },

    {
      image: beacon,
      name: "Gold Tree Beacon",
    },

  ];


  /* 
     SCROLL LEFT
  */

  const scrollLeft = () => {

    if (trackRef.current) {

      trackRef.current.scrollBy({
        left: -400,
        behavior: "smooth",
      });

    }

  };


  /* 
     SCROLL RIGHT
  */

  const scrollRight = () => {

    if (trackRef.current) {

      trackRef.current.scrollBy({
        left: 400,
        behavior: "smooth",
      });

    }

  };


  return (

    <section className="portfolio-showcase">

      {/* LEFT ARROW */}

      <button
        className="showcase-scroll-arrow showcase-scroll-left"
        onClick={scrollLeft}
        aria-label="Scroll projects left"
      >
        ←
      </button>


      {/* PROJECT TRACK */}

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


      {/* RIGHT ARROW */}

      <button
        className="showcase-scroll-arrow showcase-scroll-right"
        onClick={scrollRight}
        aria-label="Scroll projects right"
      >
        →
      </button>

    </section>

  );

}


export default PortfolioShowcase;