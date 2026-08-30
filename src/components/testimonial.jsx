import React, { useState } from "react";
import "../styles/testimonial.css";
import logo from '../assets/testi.webp'
const testimonials = [
  {
    title: "AN ABSOLUTE PLEASURE TO WORK WITH",
    text:
      "Jackie was an absolute pleasure to work with. She took care of my brand design in a sufficient and timely manner. She was a great communicator and very reliable.",
    author: "Gia, Bronzed by Gi",
  },

  {
    title: "HIGHLY RECOMMENDED",
    text:
      "The website exceeded my expectations. Everything was delivered on time and communication was amazing throughout the project.",
    author: "John Smith",
  },

  {
    title: "VERY PROFESSIONAL",
    text:
      "Working together was a wonderful experience. Every detail was carefully designed and the final product looked incredible.",
    author: "Sarah Williams",
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);

  const previous = () => {
    setIndex((index - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setIndex((index + 1) % testimonials.length);
  };

  return (
    <section className="testimonial-section">

      <button className="arrow left" onClick={previous}>
        &#8592;
      </button>

      <div className="testimonial-card">
        <h1>"{testimonials[index].title}"</h1>

        <p>{testimonials[index].text}</p>

        <h3>- {testimonials[index].author}</h3>
      </div>

      <button className="arrow right" onClick={next}>
        &#8594;
      </button>

    </section>
  );
}