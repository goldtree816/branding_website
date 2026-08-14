import "../styles/blog.css";
import ProjectCard from "../components/projectcard";
import b1 from "../assets/b1.png";
import b2 from "../assets/b2.png";
import b3 from "../assets/b3.png";
import b4 from "../assets/b4.png";
import b5 from "../assets/b5.png";
import b6 from "../assets/b6.png";
import b7 from "../assets/b7.png";
import b8 from "../assets/b8.png";



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

</section>
    </>
  );
}

export default Blog;