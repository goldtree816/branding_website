import Card from "./card.jsx";
import "../styles/value.css";
import headphone from '../assets/g_headphone.png'
import protein from '../assets/g_protein.png'
import speaker from '../assets/g_speakers.png'



function Values() {
  return (
    <section className="features">

      <Card
        image={headphone}
        />

      <Card
       image={protein}
      />

      <Card
       image={speaker}
      />

    </section>
  );
}

export default Values;