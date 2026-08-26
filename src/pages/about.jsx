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
            <h1>INFLUENCER MARKETING</h1>
            <p><b>Connecting Brands With the Right Voices</b></p>
            
              <p>We connect your brand with relevant influencers who have genuine influence and a strong connection with your target audience. Through carefully planned collaborations, authentic content, and strategic partnerships, we help your brand reach new audiences while building trust and credibility.</p>
              <br></br>
                
                <p>Our influencer marketing approach focuses on finding the right creators, developing meaningful campaigns, and maximizing engagement. Whether it’s product promotion, brand awareness, or launching a new service, we turn influencer partnerships into impactful campaigns that deliver real value for your brand.</p><br></br>
                    
                    
                  </div>
                  </section>

      <section className="serve1">
                  <div className="img2">
        <img src={logo2} alt="brand" />
      </div>
                  <div className="serve-copy1">
                    <h1>ADVERTISING DASHBOARD</h1>
                      
                  <p><b>Manage, Monitor & Optimize Your Campaigns</b></p><br></br>

                  <p>An advertising dashboard gives businesses a clear overview of their digital advertising campaigns in one place. It can display important information such as ad reach, impressions, clicks, engagement, conversions, and overall campaign performance.</p><br></br>

                  <p>With real-time insights and organized reports, businesses can understand what is working and where improvements are needed. This helps make better marketing decisions, optimize advertising budgets, and achieve stronger results from every campaign.</p><br></br>
                    
                   
                     
                  </div>
                  </section>



      <section className="serve">
                  <div className="img1">
        <img src={logo3} alt="brand" />
      </div>
                  <div className="serve-copy">
                    <h1>SOCIAL MEDIA MARKETING</h1>
                    <p><b>Building Your Brand Beyond the Screen</b></p>
                      
                
                  <p>We create social media strategies that help your brand stand out, connect with the right audience, and build lasting relationships. From engaging visuals and compelling content to targeted campaigns, we make sure your brand communicates consistently and effectively across every platform.</p><br></br>   

                  <p>Our approach combines creativity with strategy to turn social media into a powerful tool for growth. We focus on increasing brand awareness, driving engagement, reaching potential customers, and creating a strong digital community around your business.</p><br></br>

                     

                      <button>MORE ABOUT MARKETING</button>
                  </div>
                  </section>

        
        
        <section className="myidea">
          <Testimonial/>
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