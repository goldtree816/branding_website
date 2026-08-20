import "../styles/blog.css";
import ProjectCard from "../components/projectcard";
import Free_Down from "../components/free";
import b1 from "../assets/b_sunglasses.png";
import b2 from "../assets/b_ladiesbag.png";
import b3 from "../assets/b_earbud.png";
import b4 from "../assets/b4.png";
import b5 from "../assets/b5.png";
import b6 from "../assets/b6.png";
import b7 from "../assets/b7.png";
import b8 from "../assets/b8.png";
import b9 from "../assets/b9.png";
import b10 from "../assets/b10.png";
import b11 from "../assets/b11.png";
import b12 from "../assets/b12.png";
import b13 from "../assets/b13.png";
import b14 from "../assets/b14.png";
import b15 from "../assets/b15.png";
import b16 from "../assets/b16.png";
import free1 from "../assets/free1.png";
import free2 from "../assets/free2.png";
import free3 from "../assets/free3.png";



function Blog() {
  return (
    <>
      <section className="intro1">

        <h1>The Blog & Info <i>Spot</i></h1>

        <p>Your website should be working harder than it is. Your brand should look like the business you've actually built. This is where I break down exactly how to make both happen. Squarespace tips, brand strategy, design advice, and the stuff most designers don't tell you.</p>

        <details className="cat-accordion">
      <summary>
        <span>Categories</span>

        <svg
          className="cat-chevron"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </summary>

      <div className="cat-list">
        <a href="/blog/category/guides">Guides</a>

        <a href="/blog/category/luxury-branding-tips">
          Luxury-Branding-Tips
        </a>

        <a href="/blog/category/luxury-website-tips">
          Luxury-Website-Tips
        </a>

        <a href="/blog/category/squarespace-tips">
          Squarespace-Tips
        </a>
      </div>
    </details>

      </section>

      <section className="grid">

<ProjectCard
  image={b1}
  title="Guides, Squarespace-Tips"
  description="Squarespace vs Wordpress: What's Best for Your service-based Brand?"
/>


<ProjectCard
  image={b2}
  title="Guides"
  description="Website Design for Therapists: How to Build Trust Before the First Session"
/>


<ProjectCard
  image={b3}
  title="Luxury-Website-Tips"
  description="Bespoke Website Design: What It Is and Why It Matters for Your Brand"
/>


<ProjectCard
  image={b4}
  title="Guides, Squarespace-Tips"
  description="Squarespace Pricing Explained: Every Plan, What's Included, and What It Actually Costs (2026)"
/>


<ProjectCard
  image={b5}
  title="Guides, Luxury-Branding-Tips"
  description="How Much Does Branding Cost? What Service-based Businesses Actually Pay"
/>


<ProjectCard
  image={b6}
  title="Guides"
  description="Why People Pay Others to Build Squarespace Websites (And When It's Worth It)"
/>


<ProjectCard
  image={b7}
  title="Guides"
  description="Med Spa Website Design: What High-End Clients Expect Before They Book"
/>


<ProjectCard
  image={b8}
  title="Guides"
  description="Small Business Website Design: What You Actually Need (And What You Don't)"


/>

<ProjectCard
  image={b9}
  title="Luxury-Branding-Tips"
  description="What Is Brand Identity Design? (And Why It's More Than a Logo)"
/>


<ProjectCard
  image={b10}
  title="Guides, Luxury-Branding-Tips"
  description="8 Powerful Colors for Your Brand Kit, And What Each One Communicates"
/>


<ProjectCard
  image={b11}
  title="Guides, Luxury-Website-Tips"
  description="Website Design for Wellness Professionals: What You Need to Know"
/>


<ProjectCard
  image={b12}
  title="Luxury-Website-Tips"
  description="5 Signs Your Website Is Costing You Clients (And How to Fix It)"
/>


<ProjectCard
  image={b13}
  title="Luxury-Website-Tips"
  description="Leave Link-Tree Behind: how to Build Your Own Multi-Link Page on your website"
/>


<ProjectCard
  image={b14}
  title="Luxury-Branding-Tips"
  description="Why Your Business Needs Multiple Logos"
/>


<ProjectCard
  image={b15}
  title="Luxury-Branding-Tips, Luxury-Website-Tips"
  description="Why professional brand photography is essential to your business & website"
/>


<ProjectCard
  image={b16}
  title="Luxury-Branding-Tips"
  description="Free Branding Checklist for Entrepreneurs, freelancers, and small businesses"

/>

</section>
<section className="business-resources">
      <div className="resource-card">
        <div className="resource-content">
          <h1>BUSINESS RESOURCES</h1>

          <p>
            <strong>Starting a business is no walk in the park, we feel ya!</strong>{" "}
            Check out a collection of tools and resources that we personally
            use and recommend for everything biz. From design tools,
            content creation, planning, organizing, learning, and even
            legal protection.
          </p>
        </div>

        <div className="resource-button">
          <a href="#">CHECK THEM OUT</a>
        </div>
      </div>
    </section>
    <section>
      <div className="free-container">

    <Free_Down
        image={free1}
        title="FREE DOWNLOAD: SERVICE-BASED BUSINESS WEBSITE BLUEPRINT"
        description="The free blueprint breaks down every page of your service website. Section by section, so you know exactly what belongs there and why."
    />

    <Free_Down
        image={free2}
        title="FREE DOWNLOAD: AUDIT YOUR WEBSITE GUIDE"
        description="Free resource to help you evaluate and enhance the performance of your current website. By conducting a website audit, you can identify and address any shortcomings or gaps in your site."
    />

    <Free_Down
        image={free3}
        title="FREE DOWNLOAD: BRANDING CHECKLIST"
        description="Whether you're struggling to gain clarity with your brand, completely starting from scratch, or if you're DIY and want to get it done right, this guide will help you understand what you need."
    />

</div>
    </section>
    </>
  );
}

export default Blog;