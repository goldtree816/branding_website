import "../styles/projectcard.css";

function ProjectCard({
  image,
  title,
  category,
  description,
  number,
}) {
  return (
    <article className="portfolio-card">

      <div className="portfolio-card-image">

        <img src={image} alt={title} />

        <span className="project-number">
          {number}
        </span>

        <div className="project-arrow">
          ↗
        </div>

      </div>


      <div className="portfolio-card-content">

        <div>

          <h3>{title}</h3>

          <p className="project-category">
            {category}
          </p>

        </div>


        <p className="project-description">
          {description}
        </p>

      </div>

    </article>
  );
}

export default ProjectCard;
