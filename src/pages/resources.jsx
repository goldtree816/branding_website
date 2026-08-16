import React from 'react'
import Card from '../components/card.jsx'
import '../styles/card.css'
 import logo1 from '../assets/pp.webp'
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
          <Card
          title="DUBSADO*"
          description="Dubsado is such a powerful business management tool/CRM system that allows you to send contracts, invoices, integrate your calendar, email, handle project management, and more. You can also create workflows to automate these processes which is a huge time saver! Get 20% off your first month or year with the above link!"
          button={"Try it Out"} 
          />

          <Card
          title="FLODESK*"
          description="Flodesk is an awesome email marketing platform that makes it easy to create beautiful, high converting email campaigns. Get 50% off your subscription with the above link!"
          button={"Try it Out"} 
          />


          <Card
          title="STYLE STOCK SOCIETY*"
          description="Is professional brand photography out of your budget right now? I’ve been there I totally get it. Stock photos are a great alternative but it’s hard to find ones that aren’t generic or overused. Styled Stock Society is my favorite resource for on-brand stock photos, easy-to-use templates (like IG Stories, workbooks, ad graphics), and more. "
          button={"Try it Out"} 
          />

          <Card
          title="CANVA*"
          description="Create graphics using pre-made templates as a starting point for free. Great for on-the-go content creation. Canva is a great design tool whether you’re an experienced designer or don’t have a creative bone in ya."
          button={"Try it Out"} 
          />

          </section>

         <section className='Row2'>
          <Card
          title="MOO*"
          description="I love using Moo for all of my business cards and other printing needs, the quality and turnaround time is top notch. Get 25% off your first order with the above link!"
          button={"Try it Out"} 
          />

          <Card
          title="SELF CARE JOURNAL*"
          description="In the midst of life's busyness,, it's essential to place yourself at the forefront and prioritize your well-being. Devoting even a few precious moments to self-care can have a profound impact on nourishing your mind, body, and soul. I designed this Self-Care journal for myself and decided to make it available to others to enjoy the benefits I’ve seen xo"
          button={"Try it Out"} 
          />

          <Card
          title="THE CONTACT SHOP*"
          description="Get protected (like Elle Woods protected) in your business. But seriously the easiest DIY legal templates for all types of contracts, privacy policy, and terms and conditions for your website."
          button={"Try it Out"} 
          />

          <Card
          title="PHOTOGRAPHERS SAVING GUIDE*"
          description="Recommended by a fellow photographer peer has found this photography guide that is loaded with different tips from basic photography and use of the camera, to how to use and save on camera gear and equipment, different tricks, tips and lessons, literally almost anything you could think of!"
          button={"Try it Out"} 
          />
            
      </section>
    </>
  )
}

export default resources
