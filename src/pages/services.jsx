  import "../styles/services.css";
  import sunglass from "../assets/sunglass.png";
  import ladiesbag from "../assets/ladiesbag.png";
  import earbud from "../assets/earbud.png";
  import stop from "../assets/stop.png";
  import honey from "../assets/honey.png";
  import design from "../assets/design.png";
  import goldtree from "../assets/goldtree_4.png";
  import jaks from "../assets/jaks.png";
  import Testimonial from "../components/testimonial.jsx";
  import { Link } from "react-router-dom";


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
        <img src={sunglass} alt="brand" />
      </div>
                  <div className="serve1-copy">
                      <h1>Goldtree Sunglassess</h1>
                      <p><b>For those who want timeless style with a touch of luxury</b></p><br></br>
                      <p>If you’re looking for sunglasses that combine effortless elegance with everyday comfort, Goldtree Sunglasses are designed for you. We bring together refined design, premium materials, and a sophisticated aesthetic to help you make a confident statement wherever you go.</p><br></br>
                      <p>From classic frames to modern silhouettes, each pair is thoughtfully designed to complement your personal style while providing reliable protection and comfort. Goldtree Sunglasses add a polished finishing touch to every look, making them a perfect blend of fashion, function, and confidence.</p>
                      <br></br><p>Starting at $120+</p><br></br>
                      <Link to="/service_sunglass"><button>ABOUT SUNGLASSES</button></Link>
                      
                  </div>
                  </section>

                  <section className="serve">
                      <div className="img1">
        <img src={ladiesbag} alt="bespoke" />
      </div>
                      
                      <div className="serve-copy">
                      <h1>Goldtree Ladies Bag</h1>
                      <p><b>For women who want elegance, functionality, and timeless style</b></p><br></br>
                      <p>If you’re searching for a bag that feels as sophisticated as it is practical, Goldtree Ladies Bags are made for you. Designed to complement your everyday lifestyle, our bags combine elegant details, premium finishes, and functional spaces so you can carry everything you need with confidence.</p><br></br>
                      <p>From carefully selected materials and refined gold accents to spacious interiors and versatile designs, every bag is thoughtfully created to bring together fashion and functionality. Goldtree Ladies Bags are made to elevate your everyday outfits while becoming a timeless part of your wardrobe.</p>
                      <br></br><p>Starting at $180+</p><br></br>
                      <Link to="/service_ladiesbag"><button>ABOUT LADIES BAG</button></Link>
                  </div>
                  </section>

                  <section className="serve1">
                      <div className="img2">
        <img src={earbud} alt="flodesk" />
      </div>
                      <div className="serve1-copy">
                      <h1>Goldtree Earbuds</h1>
                      <p><b>For those who want premium sound without compromising on style</b></p><br></br>
                      <p>If you’re tired of choosing between great sound and beautiful design, Goldtree Earbuds bring both together. Designed for modern lifestyles, they deliver an immersive listening experience while offering a sleek, lightweight design that fits naturally into your everyday routine.</p><br></br>
                      <p>From clear audio and reliable wireless connectivity to long-lasting battery life and comfortable fit, every detail is designed with convenience in mind. Goldtree Earbuds combine technology, comfort, and sophisticated design to keep you connected to the sounds that matter most.</p>
                      <br></br><p>Starting at $80+</p><br></br>
                      <Link to="/service_earbud"><button>ABOUT EARBUD</button></Link>
                  </div>
                  </section>

                  <section className="serve">
                      <div className="img1">
        <img src={honey} alt="brand" />
      </div>
                      
                      <div className="serve-copy">
                      <h1>Goldtree Honey</h1>
                      <p><b>For those who value natural goodness with a touch of premium quality</b></p><br></br>
                      <p>If you’re looking for pure, naturally sourced honey that brings sweetness and quality to your everyday life, Goldtree Honey is made for you. Carefully selected and presented with a commitment to natural goodness, our honey delivers a rich flavor and authentic experience straight from nature.</p><br></br>
                      <p>From its golden color and naturally sweet taste to its carefully crafted packaging, Goldtree Honey brings together purity, quality, and elegance. Whether enjoyed in your morning routine, added to your favorite recipes, or simply savored by the spoonful, it’s nature’s sweetest gold.</p><br></br>
                      <br></br><p>Starting at $15+</p><br></br>
                      <Link to="/service_honey"><button>ABOUT HONEY</button></Link>
                  </div>
                  </section>

                  <section className="serve1">
                      <div className="img2">
        <img src={design} alt="flodesk" />
      </div>
                      <div className="serve1-copy">
                      <h1>Design DAY Intensives</h1>
                      <p><b>For focused projects and a cleared design to-do list</b></p><br></br>
                      <p>Design intensives offer dedicated, high-impact design support within a 1–2 week timeframe, perfect for tackling specific web or design needs without committing to a longer engagement. This collaborative, focused process allows us to move quickly while maintaining the same level of care and intention.</p><br></br>
                      <p>The result is polished, professional design that helps you move forward with confidence, clarity, and momentum.</p>
                      <br></br><p>Starting at $475</p><br></br>
                      <button>GET YOUR TO DO LIST DONE</button>
                  </div>
                  </section>

                  <section className="serve">
                      <div className="img1">
        <img src={goldtree} alt="brand" />
      </div>
                      
                      <div className="serve-copy">
                      <h1><b>Ongoing Studio Support</b></h1>
                      <p><b>For continued momentum and creative consistency</b></p><br></br>
                      <p>Monthly design, copy, and strategic support for established Jaks Digital clients who want to stay consistent, maintain momentum, and keep their brand evolving, without starting from scratch each time.</p><br></br>
                      <p>This ongoing service includes five dedicated hours per month of flexible creative support, designed to reduce your to-do list and support continued growth. Whether you need ongoing website updates or bringing new ideas to life, you have a trusted creative partner already in place to keep your brand aligned and moving forward.</p><br></br>
                      
                      <button>MORE ABOUT STUDIO SUPPORT</button>
                  </div>
                  </section>
                  <Testimonial/>
              <br></br> 

              <div className="container">

                  <h2>Ways To Work Together</h2>

                  <p>
                      Whether you need one piece done right or the whole
                      thing built from the ground up, there is a solution
                      that fits your goals.
                  </p>  
                  <div class="line"></div>


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