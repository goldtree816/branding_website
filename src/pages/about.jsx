  import "../styles/about.css";
  import Testimonial from "../components/testimonial.jsx";
  import Values from '../components/value.jsx'
  import logo from '../assets/intro.webp'
  import logo1 from '../assets/pp.webp'
  import logo2 from '../assets/pp1.webp'
  import logo3 from '../assets/pp2.webp'
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
            <h1>Hey! I’m Jaks</h1>
            <h2>Your creative partner, Brand Strategist,  and lead Website Designer</h2>
              <p>(And yes, Jaks or Jackie totally works.)</p>
                <p>I’m the founder and lead designer behind Jaks Digital LLC, a Long Island, NY based studio helping passionate entrepreneurs build brands and websites that feel aligned, elevated, and genuinely reflective of who they are. I’m extremely 1:1 with my clients, so you’ll always feel like a VIP. </p><br></br>
              <p>Back in 2018, I fell in love with the online business world and ditched my 9–5 for good. Since then, I’ve helped over 125 service-based businesses grow with strategic branding and custom Squarespace web design that tells their story and attracts the right people.</p><br></br>
                    
                    <p>As your brand strategist and website expert, my job is simple: help you show up with confidence, clarity, and consistency—so your dream clients know exactly why you’re the one.</p> <br></br>
                      <button>HOW CAN WE WORK TOGETHER</button>
                  </div>
                  </section>

      <section className="serve1">
                  <div className="img2">
        <img src={logo2} alt="brand" />
      </div>
                  <div className="serve-copy1">
                    <h1>From Cubicle Life to Full Creative Freedom</h1>
                      
                  <p>Entrepreneurship gives you the power to make your own rules—and as your brand and website expert, I’m here to help you discover what’s possible when you do.</p><br></br>
                  <p>Fresh out of college, I found myself in the same routine so many creatives fall into: commuting, clocking in, working hard for little reward, and barely making it home in time for dinner. It felt like survival mode, and I couldn’t shake the question: Is this really it?</p><br></br>

                  <p>Then one day, a Facebook ad changed everything. The idea of working from anywhere clicked. Not for travel’s sake, but for the freedom. Freedom to work from my couch. A friend’s kitchen. 30,000 feet in the sky. By the pool. Wherever life happened to take me.</p><br></br>
                    
                    <p>That’s when I walked away from the 9–5 grind and dove headfirst into learning how to turn my design skills into a full-time business. Since then, this journey has been about personal growth, creative independence, and helping other entrepreneurs design brands that support the lives they actually want too.</p><br></br>
                     
                  </div>
                  </section>



      <section className="serve">
                  <div className="img1">
        <img src={logo3} alt="brand" />
      </div>
                  <div className="serve-copy">
                    <h1>My Personal Approach to Brand Strategy & Squarespace Design</h1>
                      
                  <p>What started as a leap toward freedom has grown into a career rooted in creative flow, meaningful client relationships, and work that feels genuinely fulfilling. When you work with me, you’re not passed off to a team or shuffled through a process. You have my full attention, every step of the way.</p><br></br>
                      
                  <p>I thrive on the challenges that come with building thoughtful brands and websites, and I’m deeply grateful for the flexibility to create, the trust my clients place in me, and the opportunity to help shape how their businesses show up in the world.</p><br></br>   

                  <p>If you’re ready to partner with a creative who takes your late-night ideas and scribbled brainstorms and turns them into something refined, strategic, and meaningful, you’re in the right place.</p><br></br>

                      <p><b>Let’s design a brand and website that moves you forward.</b></p><br></br>

                      <button>DESIGN SERVICES</button>
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