
/*service*/

import "../styles/services.css";
import { Link } from "react-router-dom";

// Replace these with your actual farmer-related images
import farmer from "../assets/farm.jpg";
import products from "../assets/showcase.jpg";
import customers from "../assets/connection.jpg";
import mobile from "../assets/farm_web.jpg";
import branding from "../assets/story.jpg";
import ordering from "../assets/future.jpg";

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

                    <button>
                        START YOUR FARM WEBSITE
                    </button>


            </div>

        </section>

    );
}

export default FarmerService;
