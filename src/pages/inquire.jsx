import React from "react";
import "../styles/inquire.css";
import Form from '../components/form.jsx'

function Inquire() {
  return (
    <>
      {/* ================= TOP BANNER ================= */}
      <div className="top-banner">
        <p>
          READY TO TAKE YOUR FARM BUSINESS ONLINE? LET'S BUILD YOUR DIGITAL
          PRESENCE
        </p>
        <hr />
      </div>

      {/* ================= HERO SECTION ================= */}
      <section className="contact-hero">
        <div className="content">
          <h1>LET'S GROW TOGETHER</h1>

          <h2>
            <i>Build a stronger online presence for your farm</i>
          </h2>
        </div> <br></br>
        <div className="inquiry-intro">
            <p>
          TELL US ABOUT YOUR FARM, YOUR PRODUCTS, AND YOUR GOALS. WE'D LOVE TO
          LEARN MORE ABOUT YOUR BUSINESS AND HOW WE CAN HELP YOU GROW ONLINE.
        </p>

        <p>
          Fill out the form below and tell us what you need. We'll review your
          requirements and help you find the right digital solution for your
          farm.
        </p>
        </div>
      </section>

      <Form/>

      {/* ================= CONTACT INFORMATION ================= */}
      <section className="contact-information">
        <h2>LET'S TALK ABOUT YOUR FARM</h2>

        <p>
          Have a question before submitting your inquiry? Feel free to reach
          out to us directly.
        </p>

        <div className="contact-details">
          <div className="contact-item">
            <h3>Email</h3>
            <p>hello@farmerweb.com</p>
          </div>

          <div className="contact-item">
            <h3>Phone</h3>
            <p>+977 98XXXXXXXX</p>
          </div>

          <div className="contact-item">
            <h3>Location</h3>
            <p>Nepal</p>
          </div>
        </div>

        <p className="contact-note">
          We'd be happy to discuss your farm, your goals, and the best digital
          solution for your business.
        </p>
      </section>
    </>
  );
}

export default Inquire;