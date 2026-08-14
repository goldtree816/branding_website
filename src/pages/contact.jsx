import "../styles/contact.css";
import Form from '../components/form.jsx'

function Contact() {

    return (

        <section id="contact" className="contact">

            <div className="content">
          <h1>GET IN TOUCH</h1>
          <h2><i>The next level of your business starts here</i></h2>
        </div>
    

      <div>
        <h1>PROJECT INQUIRY FORM</h1>
        <p>
          I CAN'T WAIT TO HEAR ABOUT YOUR BUSINESS GOALS AND THE VISION FOR
          YOUR PROJECT.
        </p>
        <p>Upon submission, you will be able to book your free discovery call directly on my calendar.</p>
      </div>
    
    <Form/>
     </section>

    

    );

}

export default Contact;