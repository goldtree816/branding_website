import Card from "./card.jsx";
import "../styles/values.css";


function Values() {
  return (
    <section className="features">

      <Card
        icon="✳"
        title="FULL SERVICES"
        description="Branding, website, SEO and digital marketing together."
        button="FULL SERVICE"
        
      />

      <Card
        icon="☀"
        title="WEB DESIGN"
        description="Custom Squarespace websites built for service-based businesses."
        button="MORE ABOUT WEB DESIGN"
      />

      <Card
        icon="⇓"
        title="Email Marketing"
        description="Branded email templates and welcome sequences to grow your audience."
        button="MORE ABOUT EMAIL"
      />
      <Card
        icon="⇓"
        title="Brand Design"
        description="Timeless visual identity, logo and branding system."
        button="MORE ABOUT BRANDING"
      />

    </section>
  );
}

export default Values;