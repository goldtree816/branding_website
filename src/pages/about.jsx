import "../styles/about.css";
<<<<<<< Updated upstream
=======
import Testimonial from "../components/testimonial.jsx";
import Values from "../components/value.jsx";
import logo from "../assets/intro.webp";
import logo1 from "../assets/stop.png";
import logo2 from "../assets/email.png";
import logo3 from "../assets/goldtree_4.png";
>>>>>>> Stashed changes

function About() {
  return (
    <>
      <section className="intro">
<<<<<<< Updated upstream
        <h1>Boutique Branding &amp; Website Design Studio</h1>

        <p>
          We partner with wellness and wedding professionals, personal brands,
          and service-based businesses to elevate how they show up online
          through refined, high-impact design.
        </p>

        <p>
          Through a creative and collaborative process, we transform unclear
          messaging and disconnected visuals into cohesive digital experiences
          designed to build trust.
        </p>
      </section>

      <section className="story">
        <div className="story-copy">
          <span className="eyebrow">Our story</span>

          <h2>Design, built around trust</h2>

          <p>
            JAKS Digital started with a simple observation: the practitioners
            who care the most about their clients often have the least polished
            digital presence. Wellness pros, wedding vendors, and independent
            consultants pour everything into their craft, and their websites
            get whatever time is left over.
          </p>

          <p>
            We founded this studio to close that gap. Every brand and site we
            build is meant to do one job well — make it easy for the right
            client to trust you before they ever say hello.
=======
        <h1>EMPOWERING FARMERS THROUGH DIGITAL AGRICULTURE</h1>

        <p className="head">
          Farmer Web brings farmers, agricultural information, and digital
          services together in one place to make farming easier, smarter, and
          more connected.
        </p>

        <button>Explore Farmer Web</button>
      </section>

      <section className="serve">
        <div className="img1">
          <img src={logo1} alt="Agricultural information" />
        </div>

        <div className="serve-copy5">
          <h1>FARMING INFORMATION & ADVISORY</h1>

          <p>
            <b>Reliable Knowledge for Better Farming Decisions</b>
>>>>>>> Stashed changes
          </p>
        </div>

<<<<<<< Updated upstream
        <div className="portrait">Studio / founder photo</div>
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
=======
          <p>
            Farmer Web provides farmers with useful agricultural information
            to help them make better decisions throughout the farming process.
            From crop selection and cultivation techniques to pest management
            and modern farming practices, farmers can access information that
            supports more productive and sustainable agriculture.
          </p>

          <br />

          <p>
            Our goal is to make agricultural knowledge easier to understand
            and access. By bringing important farming guidance into one digital
            platform, Farmer Web helps farmers improve their practices,
            reduce avoidable losses, and increase the overall productivity of
            their farms.
          </p>

          <br />
        </div>
      </section>

      <section className="serve1">
        <div className="img2">
          <img src={logo2} alt="Farmer communication and support" />
        </div>

        <div className="serve-copy6">
          <h1>WEATHER & CROP MONITORING</h1>

          <p>
            <b>Helping Farmers Plan With Better Information</b>
          </p>

          <br />

          <p>
            Weather conditions can have a major impact on agricultural
            production. Farmer Web helps farmers access important weather and
            crop-related information so they can better plan activities such
            as planting, irrigation, harvesting, and crop protection.
          </p>

          <br />

          <p>
            With timely information about weather conditions and crop
            requirements, farmers can respond more effectively to changing
            conditions. This supports better resource management, reduces
            unnecessary risks, and helps farmers make informed decisions at
            different stages of cultivation.
          </p>

          <br />
        </div>
      </section>

      <section className="serve">
        <div className="img1">
          <img src={logo3} alt="Agricultural marketplace" />
        </div>

        <div className="serve-copy5">
          <h1>FARMER MARKETPLACE</h1>

          <p>
            <b>Connecting Farmers With Buyers and Opportunities</b>
          </p>

          <p>
            Farmer Web creates a digital space where farmers can showcase
            their agricultural products and connect with potential buyers.
            This helps reduce the gap between producers and consumers while
            giving farmers better opportunities to promote and sell their
            products.
          </p>

          <br />

          <p>
            From fresh vegetables and fruits to grains, livestock products,
            and other agricultural goods, the platform can help farmers reach
            a wider market. By improving access to market information and
            digital connections, Farmer Web aims to support better selling
            opportunities and stronger agricultural communities.
          </p>

          <br />

          <button>EXPLORE FARMER MARKETPLACE</button>
        </div>
      </section>

      <section className="myidea">
        <Testimonial />
      </section>

      <section className="process">
        <span className="eyebrow" style={{ color: "#e0a19c" }}>
          How Farmer Web Helps
        </span>

        <h2>From Farming Information to Better Results</h2>

        <p className="sub">
          A simple digital journey designed to help farmers access information,
          manage their farming activities, and discover better opportunities.
        </p>

        <div className="steps">
          <div className="step">
            <div className="num">01</div>
            <h3>Learn</h3>
            <p>
              Access useful information about crops, farming techniques,
              fertilizers, pests, diseases, and modern agricultural practices.
            </p>
          </div>

          <div className="step">
            <div className="num">02</div>
            <h3>Plan</h3>
            <p>
              Use weather, crop, and seasonal information to plan farming
              activities at the right time.
            </p>
          </div>

          <div className="step">
            <div className="num">03</div>
            <h3>Grow</h3>
            <p>
              Apply better farming practices to improve crop health,
              productivity, and efficient use of resources.
            </p>
          </div>

          <div className="step">
            <div className="num">04</div>
            <h3>Sell</h3>
            <p>
              Connect with markets and potential buyers to create better
              opportunities for selling agricultural products.
>>>>>>> Stashed changes
            </p>
          </div>
        </div>

        <a className="process-link" href="#">
<<<<<<< Updated upstream
          See our full process
        </a>
      </section>
=======
          Learn More About Farmer Web
        </a>
      </section>

      <Values />
>>>>>>> Stashed changes
    </>
  );
}

export default About;