<<<<<<< Updated upstream
import "../styles/services.css";
import brand from "../assets/brand.png";
import bespoke from "../assets/bespoke.png";
import flodesk from "../assets/flodesk.jpg";


function Services() {

    return (
            
        <section id="services" className="section">
            <div className="info">
                <h2>SQUARESPACE WEBSITE DESIGN & BRAND IDENTITY SERVICES</h2>
            <p>For service-based businesses who've outgrown DIY — and are ready for a brand and website that actually does the work.</p>
            </div>
            
            <section>
            <div className="right">
                <h2>Stop the Guesswork. Start Building a Brand with Clarity and Confidence.</h2><br></br>
                <p>For the visionaries, the innovators, the entrepreneurs who weave passion into their profession — your journey begins here. We know your business isn’t just a service, it’s a story. It’s a reflection of your expertise, your values, and where you’re headed next. And your brand deserves to tell that story with clarity, confidence, and intention.</p>
                <p>We specialize in web design and branding experiences that go far beyond the surface. Yes, they’ll turn heads. More importantly, they’ll build trust, create connection, and support real growth. Every detail is tailored to help you show up as the expert you are, attract the right clients, and move your business forward with ease.</p>
                
            </div>
            </section>

            <section className="serve">
                <div className="img1">
      <img src={brand} alt="brand" />
    </div>
                <div className="serve-copy">
                    <h2>Brand Identity Design Services</h2>
                    <p><b>For businesses ready to move beyond DIY for a polished presence</b></p>
                    <p>If you’re outgrowing your DIY roots and craving a brand that finally feels aligned, polished, and professional, this service is for you. We help you transition from inconsistent visuals and second-guessing to a cohesive brand identity that builds trust and elevates your market position, confidence, and credibility.</p>
                    <p>From logo design to color palettes and typography, we create a thoughtfully designed brand system that sets the tone for your next chapter, reinforces your expertise, and ensures your business shows up with consistency and credibility across every touchpoint.</p>
                    <br></br><p>Starting at $2000+</p><br></br>
                    <button>ABOUT BRAND IDENTITY SERVICES</button>
                </div>
                </section>

                <section className="serve1">
                    <div className="img2">
      <img src={bespoke} alt="bespoke" />
    </div>
                    
                    <div className="serve1-copy">
                    <h2><b>Bespoke Website Design</b></h2>
                    <p>For established businesses ready to lead at a higher level</p>
                    <p>If your current website no longer reflects who you are—or where your business is headed—this is more than a refresh. It’s a strategic upgrade.  Our custom, multi-page Squarespace websites are designed for entrepreneurs who are ready to show up with confidence, clarity, and authority.</p>
                    <p>From elevated aesthetics to seamless functionality, every element is intentionally crafted to position your brand at a higher level, attract premium clients, and support long-term growth—behind the scenes and beyond launch day.</p>
                    <br></br><p>Starting at $2500+</p><br></br>
                    <button>EXPLORE WEBSITE DESIGN</button>
                </div>
                </section>

                <section className="serve2">
                    <div className="img3">
      <img src={flodesk} alt="flodesk" />
    </div>
                    <div className="serve2-copy">
                    <h2><b>Flodesk Email Marketing</b></h2>
                    <p>For businesses ready to build connection beyond social media</p>
                    <p>This service is designed for entrepreneurs who are ready to leverage email marketing with intention and ease. Whether you’re launching a list or refining an existing one, we guide you through a focused, two-week process to set up your Flodesk account, welcome workflows, and lead magnet design.</p>
                    <p>The result is an automated email system that feels aligned, thoughtful, and easy to maintain, so nurturing your audience becomes a natural extension of your brand, not another task on your list.</p>
                    <br></br><p>Starting at $950</p><br></br>
                    <button>ELEVATE YOUR EMAIL MARKETING</button>
                </div>
                </section>
            

            <div className="container">

                <h2>Ways To Work Together</h2>

                <p>
                    Whether you need one piece done right or the whole
                    thing built from the ground up, there is a solution
                    that fits your goals.
                </p>

                <div className="services-wrap">

                    <ul className="list">

                        <li>

                            <h3>Full Service</h3>

                            <p>
                                Branding, website, SEO and digital
                                marketing together.
                            </p>

                            <button className="link-btn">
                                FULL SERVICE
                            </button>

                        </li>
                        <li>

                            <h3>Web Design</h3>

                            <p>
                                Custom Squarespace websites built for
                                service-based businesses.
                            </p>

                            <button className="link-btn">
                                MORE ABOUT WEB DESIGN
                            </button>

                        </li>
                        <li>

                            <h3>Email Marketing</h3>

                            <p>
                                Branded email templates and welcome
                                sequences to grow your audience.
                            </p>

                            <button className="link-btn">
                                MORE ABOUT EMAIL
                            </button>

                        </li>

                        <li>

                            <h3>Brand Design</h3>

                            <p>
                                Timeless visual identity,
                                logo and branding system.
                            </p>

                            <button className="link-btn">
                                MORE ABOUT BRANDING
                            </button>

                        </li>

                        

                    </ul>

                </div>

            </div>
            <section className="faq">
      <div className="container">

        <h1>WEB DESIGN AND BRANDING: FREQUENTLY ASKED QUESTIONS</h1>

        <div className="faq-item">
          <span>WHAT SHOULD I LOOK FOR WHEN HIRING A WEBSITE DESIGN STUDIO?</span>
          <span className="icon">+</span>
        </div>

        <div className="faq-item">
          <span>WHAT IS THE DIFFERENCE BETWEEN BRAND DESIGN AND WEB DESIGN?</span>
          <span className="icon">+</span>
        </div>

        <div className="faq-item">
          <span>DO WEB DESIGNERS DO BRANDING?</span>
          <span className="icon">+</span>
        </div>

        <div className="faq-item">
          <span>HOW MUCH DOES BRANDING AND WEBSITE DESIGN COST?</span>
          <span className="icon">+</span>
        </div>

        <div className="faq-item">
          <span>
            ARE THERE DESIGN STUDIOS THAT SPECIALIZE IN WEBSITES FOR
            SERVICE-BASED BUSINESSES?
          </span>
          <span className="icon">+</span>
        </div>

        <div className="faq-item">
          <span>HOW LONG DOES A BRAND AND WEBSITE DESIGN PROJECT TAKE?</span>
          <span className="icon">+</span>
        </div>

      </div>
    </section>

        </section>
        

    );

}

export default Services;
=======
/*service*/

import "../styles/services.css";
import { Link } from "react-router-dom";

// Replace these with your actual farmer-related images
import farmer from "../assets/b1.png";
import products from "../assets/b2.png";
import customers from "../assets/b3.png";
import mobile from "../assets/b4.png";
import branding from "../assets/b5.png";
import ordering from "../assets/b6.png";

function FarmerService() {
    return (

        <section id="services" className="section">

            {/* =========================
                INTRODUCTION
            ========================= */}

            <div className="info">
                <h2>FARMER WEB DESIGN & DIGITAL SERVICES</h2>

                <p>
                    Helping farmers and agricultural businesses build a
                    professional online presence and connect with more customers.
                </p>
            </div>


            {/* =========================
                FARM WEBSITE DESIGN
            ========================= */}

            <section className="serve">

                <div className="img1">
                    <img src={farmer} alt="Farm Website Design" />
                </div>

                <div className="serve-copy">

                    <h1>
                        <b>Farm Website Design</b>
                    </h1>

                    <div className="line"></div>

                    <p>
                        <b>
                            A professional website for your farm and agricultural
                            business.
                        </b>
                    </p>

                    <br></br>

                    <p>
                        Your farm is more than just a place where products are
                        grown. It represents your hard work, quality, values,
                        and connection with your customers. We create
                        professional websites that help you introduce your farm,
                        showcase your products, and make it easier for customers
                        to learn about your business.
                    </p>

                    <br></br>

                    <p>
                        Your website can include information about your farm,
                        products, services, location, contact details, farming
                        practices, and other important information your
                        customers need.
                    </p>

                </div>

            </section>


            {/* =========================
                AGRICULTURAL PRODUCT SHOWCASE
            ========================= */}

            <section className="serve1">

                <div className="img2">
                    <img
                        src={products}
                        alt="Agricultural Product Showcase"
                    />
                </div>

                <div className="serve1-copy">

                    <h1>
                        <b>Agricultural Product Showcase</b>
                    </h1>

                    <p>
                        <b>
                            Put your farm products in front of more people.
                        </b>
                    </p>

                    <br></br>

                    <p>
                        Showcase the products you grow or produce through a
                        clean and organized online catalog. Customers can
                        discover your fruits, vegetables, grains, dairy
                        products, honey, livestock products, or other
                        agricultural products in one place.
                    </p>

                    <br></br>

                    <p>
                        Each product can include images, descriptions,
                        available quantities, seasonal information, and
                        pricing where appropriate. This gives customers a
                        clearer understanding of what your farm offers.
                    </p>

                </div>

            </section>


            {/* =========================
                CUSTOMER CONNECTION
            ========================= */}

            <section className="serve">

                <div className="img1">
                    <img
                        src={customers}
                        alt="Farmer Customer Connection"
                    />
                </div>

                <div className="serve-copy">

                    <h1>
                        <b>Online Customer Connection</b>
                    </h1>

                    <p>
                        <b>
                            Make it easier for customers to reach your farm.
                        </b>
                    </p>

                    <br></br>

                    <p>
                        A website should not only tell people about your farm.
                        It should also make communication simple. We can
                        create clear contact sections where customers can
                        ask questions, request product information, and
                        connect directly with your business.
                    </p>

                    <br></br>

                    <p>
                        Your website can include contact forms, phone numbers,
                        messaging options, social media links, business hours,
                        and your farm location so customers know exactly
                        how to reach you.
                    </p>

                </div>

            </section>


            {/* =========================
                MOBILE FRIENDLY DESIGN
            ========================= */}

            <section className="serve1">

                <div className="img2">
                    <img
                        src={mobile}
                        alt="Mobile Friendly Farm Website"
                    />
                </div>

                <div className="serve1-copy">

                    <h1>
                        <b>Mobile-Friendly Farm Website</b>
                    </h1>

                    <p>
                        <b>
                            Give customers a smooth experience on every device.
                        </b>
                    </p>

                    <br></br>

                    <p>
                        Many customers discover businesses through their
                        smartphones. That is why your farm website should
                        look good and remain easy to use on phones, tablets,
                        and desktop computers.
                    </p>

                    <br></br>

                    <p>
                        We focus on responsive layouts, readable content,
                        simple navigation, properly sized images, and
                        easy-to-access contact information so customers can
                        explore your farm wherever they are.
                    </p>

                </div>

            </section>


            {/* =========================
                FARM STORY & BRANDING
            ========================= */}

            <section className="serve">

                <div className="img1">
                    <img
                        src={branding}
                        alt="Farm Branding and Story"
                    />
                </div>

                <div className="serve-copy">

                    <h1>
                        <b>Farm Story & Branding</b>
                    </h1>

                    <p>
                        <b>
                            Show customers the people and values behind your farm.
                        </b>
                    </p>

                    <br></br>

                    <p>
                        Customers want to know where their food and
                        agricultural products come from. Your website gives
                        you an opportunity to share your farming journey,
                        introduce your team, and explain what makes your
                        farm different.
                    </p>

                    <br></br>

                    <p>
                        From your farm's history and mission to your farming
                        methods and values, we organize your story into a
                        clear digital experience that helps build trust and
                        create a stronger connection with your customers.
                    </p>

                </div>

            </section>


            {/* =========================
                FUTURE ONLINE ORDERING
            ========================= */}

            <section className="serve1">

                <div className="img2">
                    <img
                        src={ordering}
                        alt="Online Farm Product Ordering"
                    />
                </div>

                <div className="serve1-copy">

                    <h1>
                        <b>Future Online Ordering</b>
                    </h1>

                    <p>
                        <b>
                            Build a foundation for selling your farm products online.
                        </b>
                    </p>

                    <br></br>

                    <p>
                        As your agricultural business grows, your website can
                        evolve with it. A professionally designed website can
                        provide the foundation for future features such as
                        online product ordering, delivery information,
                        customer accounts, and digital payments.
                    </p>

                    <br></br>

                    <p>
                        Instead of rebuilding your entire online presence as
                        your business expands, we can design your website with
                        future growth and additional functionality in mind.
                    </p>

                </div>

            </section>


            {/* =========================
                CALL TO ACTION
            ========================= */}

            <div className="container">

                <h2>
                    Ready to Bring Your Farm Online?
                </h2>

                <p>
                    Build a digital presence that tells your story, showcases
                    your products, and helps you connect with more customers.
                </p>

                <div className="line"></div>

                <Link to="/inquire">
                    <button>
                        START YOUR FARM WEBSITE
                    </button>
                </Link>

            </div>

        </section>

    );
}

export default FarmerService;
>>>>>>> Stashed changes
