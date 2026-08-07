import "../styles/projectcard.css";

function ProjectCard({image, title, tag, description}) {

return (

<article className="card">

<img 
className="thumb"
src={image}
alt={title}
/>

<div className="card-body">

<h3>{title}</h3>

<p className="tag">
{tag}
</p>


<p className="desc">
{description}
</p>


<a href="#" className="case-study">
View Case Study →
</a>


</div>

</article>

)

}

export default ProjectCard;