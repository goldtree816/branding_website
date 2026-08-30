import { Link } from "react-router-dom";
import "../styles/projectcard.css";

function ProjectCard({image, title, description, read}) {

return (

<article className="cardp">

<Link to="/blog1">
<img 
className="thumbp"
src={image}
alt={title}
/>
</Link>

<div className="cardp-body">

<p>{title}</p>


<h2 className="descp">
{description}
</h2>


<a href="#" className="case-study">Read More</a>


</div>

</article>

)

}

export default ProjectCard;