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