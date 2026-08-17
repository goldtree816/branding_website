import React from 'react'
import '../styles/resources.css'
import TryCard from '../components/ResourceCard1.jsx'
import logo1 from '../assets/pp.webp'
import Free_Down from '../components/free.jsx'
import free1 from "../assets/free1.png";
import free2 from "../assets/free2.png";
import free3 from "../assets/free3.png";
import try1 from '../assets/try1.webp'
import try2 from '../assets/try2.webp'
import try3 from '../assets/try3.webp'
import try4 from '../assets/try4.webp'
import try5 from '../assets/try5.webp'
import try6 from '../assets/try6.webp'
import try7 from '../assets/try7.webp'
import try8 from '../assets/try8.webp'
const resources = () => {
  return (
    <>
      <section className='R-intro'>
          <div className='vid'>
            <img src={logo1} alt="brand" /> 
          </div>

        <h1>BUSINESS RESOURCES</h1>
        <p>Here’s list of some of our fav business tools and resources that have been a HUGE help while starting up and continuing to run and grow my business! Everything on this list is a collection of what we personally use and recommend for everything biz. From design tools, content creation, planning, organizing, learning, and even legal protection. We hope you find something that truly saves you time, or helps in some way!</p>

      </section>

      <section className='Row1'>
          <TryCard
          image={try1}
          title="DUBSADO*"
          description="Dubsado is such a powerful business management tool/CRM system that allows you to send contracts, invoices, integrate your calendar, email, handle project management, and more. You can also create workflows to automate these processes which is a huge time saver! Get 20% off your first month or year with the above link!"
         
          />

          <TryCard
          image={try2}
          title="FLODESK*"
          description="Flodesk is an awesome email marketing platform that makes it easy to create beautiful, high converting email campaigns. Get 50% off your subscription with the above link!"
         
          />


          <TryCard
          image={try3}
          title="STYLE STOCK SOCIETY*"
          description="Is professional brand photography out of your budget right now? I’ve been there I totally get it. Stock photos are a great alternative but it’s hard to find ones that aren’t generic or overused. Styled Stock Society is my favorite resource for on-brand stock photos, easy-to-use templates (like IG Stories, workbooks, ad graphics), and more. "
          
          />

          <TryCard
          image={try4}
          title="CANVA*"
          description="Create graphics using pre-made templates as a starting point for free. Great for on-the-go content creation. Canva is a great design tool whether you’re an experienced designer or don’t have a creative bone in ya."
          
          />

          </section>

         <section className='Row2'>
          <TryCard
          image={try5}
          title="MOO*"
          description="I love using Moo for all of my business cards and other printing needs, the quality and turnaround time is top notch. Get 25% off your first order with the above link!"
         
          />

          <TryCard
          image={try6}
          title="SELF CARE JOURNAL*"
          description="In the midst of life's busyness,, it's essential to place yourself at the forefront and prioritize your well-being. Devoting even a few precious moments to self-care can have a profound impact on nourishing your mind, body, and soul. I designed this Self-Care journal for myself and decided to make it available to others to enjoy the benefits I’ve seen xo"
           
          />

          <TryCard
          image={try7}
          title="THE CONTACT SHOP*"
          description="Get protected (like Elle Woods protected) in your business. But seriously the easiest DIY legal templates for all types of contracts, privacy policy, and terms and conditions for your website."
           
          />

          <TryCard
          image={try8}
          title="PHOTOGRAPHERS SAVING GUIDE*"
          description="Recommended by a fellow photographer peer has found this photography guide that is loaded with different tips from basic photography and use of the camera, to how to use and save on camera gear and equipment, different tricks, tips and lessons, literally almost anything you could think of!"
          
          />
            
      </section>


      <section className='lines'>
        <div className='line-1'>
          <p>Please note some of these tools contain affiliate links where I may receive a small commission when you purchase through them at no extra cost to you!</p>
          </div>
     <div className='line-2'>
          <h1>Free Brand & Website Design Resources</h1>
        </div>
      </section>

       <section>
      <div className="free-container">

    <Free_Down
        image={free1}
        title="FREE DOWNLOAD: SERVICE-BASED BUSINESS WEBSITE BLUEPRINT"
        description="The free blueprint breaks down every page of your service website. Section by section, so you know exactly what belongs there and why."
    />

    <Free_Down
        image={free2}
        title="FREE DOWNLOAD: AUDIT YOUR WEBSITE GUIDE"
        description="Free resource to help you evaluate and enhance the performance of your current website. By conducting a website audit, you can identify and address any shortcomings or gaps in your site."
    />

    <Free_Down
        image={free3}
        title="FREE DOWNLOAD: BRANDING CHECKLIST"
        description="Whether you're struggling to gain clarity with your brand, completely starting from scratch, or if you're DIY and want to get it done right, this guide will help you understand what you need."
    />

</div>
    </section>
    </>
  )
}

export default resources
