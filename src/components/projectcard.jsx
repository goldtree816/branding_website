import "../styles/projectcard.css";

function ProjectCard({image, title, description, read}) {

return (

<article className="cardp">

<img 
className="thumbp"
src={image}
alt={title}
/>

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