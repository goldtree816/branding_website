import "../styles/about.css";
import Testimonial from "../components/testimonial.jsx";
import Values from "../components/value.jsx";
import logo from "../assets/intro.webp";
import logo1 from "../assets/stop.png";
import logo2 from "../assets/email.png";
import logo3 from "../assets/goldtree_4.png";

function About() {
  return (
    <>
      <section className="intro">
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
          </p>

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
            </p>
          </div>
        </div>

        <a className="process-link" href="#">
          Learn More About Farmer Web
        </a>
      </section>

      <Values />
    </>
  );
}

export default About;