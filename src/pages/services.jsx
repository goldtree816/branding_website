import "../styles/services.css";

function Services() {

    return (

        <section id="services" className="section">

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

        </section>

    );

}

export default Services;