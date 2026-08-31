import Card from "./card.jsx";
import "../styles/value.css";
import headphone from '../assets/f1.jpg'
import protein from '../assets/f2.jpg'
import speaker from '../assets/f3.jpg'



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