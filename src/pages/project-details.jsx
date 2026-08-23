import { useParams, Link } from "react-router-dom";

function ProjectDetails() {
  const { projectSlug } = useParams();

  return (
    <main className="project-details-page">

      <div className="project-details-content">

        <p>PROJECT</p>

        <h1>
          {projectSlug
            .split("-")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")
          }
        </h1>

        <p>
          This is the project case study page. More project details,
          images, branding information and website information can be
          added here.
        </p>

        <Link to="/portfolio" className="back-portfolio-btn">
             ← Back to Portfolio
        </Link>

      </div>

    </main>
  );
}

export default ProjectDetails;