import "../styles/ResourceCard1.css";

function TryCard({ image, title, description }) {
  return (
    <article className="card1">

      {/* IMAGE AREA */}
      <div className="card1-image">

        <img
          className="thumb1"
          src={image}
          alt={title}
        />

      </div>

      {/* CARD CONTENT */}
      <div className="card1-body">

        <h2>{title}</h2>

        <p className="desc1">
          {description}
        </p>

        <button type="button">
          TRY IT OUT
        </button>

      </div>

    </article>
  );
}

export default TryCard;