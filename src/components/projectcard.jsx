import "../styles/projectcard.css";

function ProjectCard({image, title, description, read}) {

return (

<article className="card">

<img 
className="thumb"
src={image}
alt={title}
/>

<div className="card-body">

<p>{title}</p>


<h2 className="desc">
{description}
</h2>


<a href="#" className="case-study">Read More</a>


</div>

</article>

)

}

export default ProjectCard;