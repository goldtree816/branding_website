  import "../styles/about.css";
  import Testimonial from "../components/testimonial.jsx";
  import Values from '../components/value.jsx'
  import logo from '../assets/intro.webp'
  import logo1 from '../assets/stop.png'
  import logo2 from '../assets/email.png'
  import logo3 from '../assets/goldtree_4.png'
  function About() {
    return (
      <>
    
        <section className="intro">
          <h1 className="head">MEET THE BRAND STRATEGIST BEHIND JAKS DIGITAL</h1>

          <p className="head">
            Thoughtful brand strategy and website design to help you show up with clarity, confidence, and a digital presence that truly reflects who you are.
          </p>

          <button>Build My Brand</button>
        </section>

        
        
        <section className="serve">
                  <div className="img1">
        <img src={logo1} alt="brand" />
      </div>
          <div className="serve-copy">
            <h1>Stop the Guesswork. Start Building a Brand with Clarity and Confidence.</h1>
            
              <p><b>For the visionaries, the innovators, the entrepreneurs who weave passion into their profession — your journey begins here.</b> We know your business isn’t just a service, it’s a story. It’s a reflection of your expertise, your values, and where you’re headed next. And your brand deserves to tell that story with clarity, confidence, and intention.</p>
              <br></br>
                
                <p>We specialize in web design and branding experiences that go far beyond the surface. Yes, they’ll turn heads. More importantly, they’ll build trust, create connection, and support real growth. Every detail is tailored to help you show up as the expert you are, attract the right clients, and move your business forward with ease.</p><br></br>
                    
                    
                  </div>
                  </section>

      <section className="serve1">
                  <div className="img2">
        <img src={logo2} alt="brand" />
      </div>
                  <div className="serve-copy1">
                    <h1>Email Marketing</h1>
                      
                  <p><b>For building meaningful connections and driving consistent engagement</b></p><br></br>

                  <p>Email marketing helps businesses connect directly with their audience through targeted, thoughtful, and engaging campaigns. From promotional emails to newsletters, each message is designed to strengthen relationships, increase awareness, and encourage action.</p><br></br>

                  <p>The result is a more connected audience, stronger customer relationships, and a marketing channel that supports long-term growth and measurable results.</p><br></br>
                    
                   
                     
                  </div>
                  </section>



      <section className="serve">
                  <div className="img1">
        <img src={logo3} alt="brand" />
      </div>
                  <div className="serve-copy">
                    <h1>Ongoing Studio Support</h1>
                      
                  <p><b>For continued momentum and creative consistency</b></p>
                  <br></br>
                      
                  <p>Monthly design, copy, and strategic support for established Jaks Digital clients who want to stay consistent, maintain momentum, and keep their brand evolving, without starting from scratch each time.</p><br></br>   

                  <p>This ongoing service includes five dedicated hours per month of flexible creative support, designed to reduce your to-do list and support continued growth. Whether you need ongoing website updates or bringing new ideas to life, you have a trusted creative partner already in place to keep your brand aligned and moving forward.</p><br></br>

                     

                      <button>MORE ABOUT STUDIO REPORT</button>
                  </div>
                  </section>

        
        
        <section className="myidea">
          <Testimonial/>
        </section>

        <section className="values">
          <span className="eyebrow">How we work</span>

          <h2>Our design philosophy</h2>

          <p className="sub">
            A few principles that shape every project, from the first call to
            final launch.
          </p>

          <div className="value-grid">
            <div className="value-card">
              <h3>Clarity first</h3>
              <p>
                If a visitor can't tell what you offer in five seconds, the design
                isn't done yet.
              </p>
            </div>
            
            <div className="value-card">
              <h3>Trust over trend</h3>
              <p>
                We design for how your ideal client makes decisions, not for
                what's popular this month.
              </p>
            </div>

            <div className="value-card">
              <h3>True collaboration</h3>
              <p>
                You know your business. We know design. The best work happens in
                between.
              </p>
            </div>

            <div className="value-card">
              <h3>Considered detail</h3>
              <p>
                Typography, spacing, and pacing all carry meaning — nothing is
                left to default.
              </p>
            </div>
          </div>
        </section>

        <section className="serve">
          <span className="eyebrow">Who we work with</span>

          <h2>Built for your industry</h2>

          <p className="sub">
            We work exclusively with a handful of niches, so our process speaks
            your language from day one. 
          </p>

          <div className="serve-grid">
            <div className="serve-card">
              <h3>Wedding professionals</h3>
              <p>
                Planners and vendors ready to move past word-of-mouth and book
                from a site that reflects the quality of their work.
              </p>
            </div>

            <div className="serve-card">
              <h3>Wellness practitioners</h3>
              <p>
                Coaches, studios, and clinicians launching a first real brand, or
                replacing one that no longer fits.
              </p>
            </div>

            <div className="serve-card">
              <h3>Personal &amp; service brands</h3>
              <p>
                Consultants and founders whose site needs to build credibility
                before a single conversation happens.
              </p>
            </div>
          </div>
        </section>

        <section className="process">
          <span className="eyebrow" style={{ color: "#e0a19c" }}>
            Our process
          </span>

          <h2>From first call to launch</h2>

          <p className="sub">
            A structured, collaborative path — see the full breakdown on our
            Process page.
          </p>

          <div className="steps">
            <div className="step">
              <div className="num">Discover</div>
              <h3>Understand</h3>
              <p>
                We learn your business, your clients, and what's holding your
                current brand back.
              </p>
            </div>

            <div className="step">
              <div className="num">Design</div>
              <h3>Concept</h3>
              <p>
                Direction and identity take shape, refined together until it feels
                unmistakably you.
              </p>
            </div>

            <div className="step">
              <div className="num">Develop</div>
              <h3>Build</h3>
              <p>
                Your site comes to life — considered, responsive, and ready to
                perform.
              </p>
            </div>

            <div className="step">
              <div className="num">Deliver</div>
              <h3>Launch</h3>
              <p>
                We hand off a brand and site built to grow with you well past
                launch day.
              </p>
            </div>
          </div>

          <a className="process-link" href="#">
            See our full process
          </a>
        </section>

        <Values/>
      </>
    );
  }

  export default About;