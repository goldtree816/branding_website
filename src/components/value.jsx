import Card from "./card.jsx";
import "../styles/value.css";


function Values() {
  return (
    <section className="features">

      <Card
        icon="✳"
        title="FREEDOM"
        description="Jaks Digital was born out of a deep craving for freedom—and now, I help other entrepreneurs claim that for themselves."
      />

      <Card
        icon="☀"
        title="COMMUNITY"
        description="Design is a collaborative process, and you'll never feel like just another client."
      />

      <Card
        icon="⇓"
        title="ALIGNMENT"
        description="Your brand should feel like a natural extension of you and reflect your values."
      />

    </section>
  );
}

export default Values;