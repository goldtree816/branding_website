  import "../styles/services.css";
  import brand from "../assets/brand.png";
  import bespoke from "../assets/bespoke.png";
  import flodesk from "../assets/flodesk.png";
  import stop from "../assets/stop.png";
  import brandweb from "../assets/brandweb.png";
  import design from "../assets/design.png";
  import ongoing from "../assets/ongoing.png";
  import jaks from "../assets/jaks.png";
  import Card from "../components/card.jsx";
  import Values from "../components/values.jsx";


  function Services() {

      return (
              
          <section id="services" className="section">
              <div className="info">
                  <h2>SQUARESPACE WEBSITE DESIGN & BRAND IDENTITY SERVICES</h2>
              <p>For service-based businesses who've outgrown DIY — and are ready for a brand and website that actually does the work.</p>
              </div>
              
              <section className="serve">
                  <div className="img1">
        <img src={stop} alt="brand" />
      </div>
                  <div className="serve-copy">
                      <h1><b>Stop the Guesswork. Start Building a Brand with Clarity and Confidence.</b></h1>
                      <div class="line"></div>
                      <p><b><i>For the visionaries, the innovators, the entrepreneurs </i>who weave passion into their profession — your journey begins here.</b>We know your business isn’t just a service, it’s a story. It’s a reflection of your expertise, your values, and where you’re headed next. And your brand deserves to tell that story with clarity, confidence, and intention.</p>
                      <br></br>
                      <p>We specialize in web design and branding experiences that go far beyond the surface. Yes, they’ll turn heads. More importantly, they’ll build trust, create connection, and support real growth. Every detail is tailored to help you show up as the expert you are, attract the right clients, and move your business forward with ease.</p>
                  </div>
                  </section>

              <section className="web">
                <div class="line"></div>
                <div className="web-content">
                <h1><b>Web Design & Branding Services</b></h1>
                </div>
                <div class="line"></div>
              <div className="web-content">
                <p>Thoughtfully structured digital design services to support different stages of growth.</p>
              </div>
              <div class="line"></div>
                
              </section>

              <section className="serve1">
                  <div className="img2">
        <img src={brand} alt="brand" />
      </div>
                  <div className="serve1-copy">
                      <h1>Brand Identity Design Services</h1>
                      <p><b>For businesses ready to move beyond DIY for a polished presence</b></p><br></br>
                      <p>If you’re outgrowing your DIY roots and craving a brand that finally feels aligned, polished, and professional, this service is for you. We help you transition from inconsistent visuals and second-guessing to a cohesive brand identity that builds trust and elevates your market position, confidence, and credibility.</p><br></br>
                      <p>From logo design to color palettes and typography, we create a thoughtfully designed brand system that sets the tone for your next chapter, reinforces your expertise, and ensures your business shows up with consistency and credibility across every touchpoint.</p>
                      <br></br><p>Starting at $2000+</p><br></br>
                      <button>ABOUT BRAND IDENTITY SERVICES</button>
                  </div>
                  </section>

                  <section className="serve">
                      <div className="img1">
        <img src={bespoke} alt="bespoke" />
      </div>
                      
                      <div className="serve-copy">
                      <h1><b>Bespoke Website Design</b></h1>
                      <p>For established businesses ready to lead at a higher level</p><br></br>
                      <p>If your current website no longer reflects who you are—or where your business is headed—this is more than a refresh. It’s a strategic upgrade.  Our custom, multi-page Squarespace websites are designed for entrepreneurs who are ready to show up with confidence, clarity, and authority.</p><br></br>
                      <p>From elevated aesthetics to seamless functionality, every element is intentionally crafted to position your brand at a higher level, attract premium clients, and support long-term growth—behind the scenes and beyond launch day.</p>
                      <br></br><p>Starting at $2500+</p><br></br>
                      <button>EXPLORE WEBSITE DESIGN</button>
                  </div>
                  </section>

                  <section className="serve1">
                      <div className="img2">
        <img src={flodesk} alt="flodesk" />
      </div>
                      <div className="serve1-copy">
                      <h1><b>Flodesk Email Marketing</b></h1>
                      <p>For businesses ready to build connection beyond social media</p><br></br>
                      <p>This service is designed for entrepreneurs who are ready to leverage email marketing with intention and ease. Whether you’re launching a list or refining an existing one, we guide you through a focused, two-week process to set up your Flodesk account, welcome workflows, and lead magnet design.</p><br></br>
                      <p>The result is an automated email system that feels aligned, thoughtful, and easy to maintain, so nurturing your audience becomes a natural extension of your brand, not another task on your list.</p>
                      <br></br><p>Starting at $950</p><br></br>
                      <button>ELEVATE YOUR EMAIL MARKETING</button>
                  </div>
                  </section>

                  <section className="serve">
                      <div className="img1">
        <img src={brandweb} alt="brand" />
      </div>
                      
                      <div className="serve-copy">
                      <h1><b>Brand. Website. Copy. Email Marketing. Done Together.</b></h1>
                      <h1 className="sign">Synchronized Success</h1>
                      <p><b>For established service-based businesses ready to invest in a complete, cohesive digital presence</b></p><br></br>
                      <p>Your brand identity, website, SEO copywriting, and email marketing, built together by one designer, with one strategy, from start to finish. No juggling vendors. No wondering if it all fits together. Just a complete, cohesive digital presence that's ready to grow with you. Three tiers from $8,250.</p><br></br>
                      
                      <button>EXPLORE FULL-SERVICE PACKAGE</button>
                  </div>
                  </section>

                  <section className="serve1">
                      <div className="img2">
        <img src={design} alt="flodesk" />
      </div>
                      <div className="serve1-copy">
                      <h1><b>Design DAY Intensives</b></h1>
                      <p><b>For focused projects and a cleared design to-do list</b></p><br></br>
                      <p>Design intensives offer dedicated, high-impact design support within a 1–2 week timeframe, perfect for tackling specific web or design needs without committing to a longer engagement. This collaborative, focused process allows us to move quickly while maintaining the same level of care and intention.</p><br></br>
                      <p>The result is polished, professional design that helps you move forward with confidence, clarity, and momentum.</p>
                      <br></br><p>Starting at $475</p><br></br>
                      <button>GET YOUR TO DO LIST DONE</button>
                  </div>
                  </section>

                  <section className="serve">
                      <div className="img1">
        <img src={ongoing} alt="brand" />
      </div>
                      
                      <div className="serve-copy">
                      <h1><b>Ongoing Studio Support</b></h1>
                      <p><b>For continued momentum and creative consistency</b></p><br></br>
                      <p>Monthly design, copy, and strategic support for established Jaks Digital clients who want to stay consistent, maintain momentum, and keep their brand evolving, without starting from scratch each time.</p><br></br>
                      <p>This ongoing service includes five dedicated hours per month of flexible creative support, designed to reduce your to-do list and support continued growth. Whether you need ongoing website updates or bringing new ideas to life, you have a trusted creative partner already in place to keep your brand aligned and moving forward.</p><br></br>
                      
                      <button>MORE ABOUT STUDIO SUPPORT</button>
                  </div>
                  </section>
              

              <div className="container">

                  <h2>Ways To Work Together</h2>

                  <p>
                      Whether you need one piece done right or the whole
                      thing built from the ground up, there is a solution
                      that fits your goals.
                  </p>

                  
                <Values/>

                <section className="serve">
                      <div className="img1">
        <img src={jaks} alt="brand" />
      </div>
                      
                      <div className="serve-copy">
                      <h1>Meet Jaks—Your Brand Strategist & Creative Partner</h1>
                      <div class="line"></div>
                      <p>I’m Jaks, the founder of Jaks Digital and the lead designer behind every brand and website you see here. I combine strategy, storytelling, and intentional design to help service-based entrepreneurs step into their next chapter with clarity and confidence.</p><br></br>
                      <p>When we work together, you gain a creative partner who understands your vision, anticipates your needs, and knows how to translate ideas into a brand experience that truly works.</p><br></br>
                      <p>Let’s create something that reflects your brilliance—and supports your growth.</p><br></br>
                      <button>MORE ABOUT JAKS</button>
                  </div>
                  </section>
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