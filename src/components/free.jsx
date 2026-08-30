import "../styles/free.css";

function Free_Down({image, title, description}) {

return (

<article className="card1">
    

<img 
className="thumb1"
src={image}
alt={title}
/>

<div className="card1-body">

<h2>{title}</h2>


<p className="desc1">
{description}
</p>


<button>DOWNLOAD FOR FREE</button>


</div>

</article>

)

}

export default Free_Down;