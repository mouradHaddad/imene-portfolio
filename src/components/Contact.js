import React from 'react'
import { useState } from 'react';
import emailjs from 'emailjs-com';



const Contact = () => {
  const [status, setStatus] = useState("Send Message");
  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_3l6agtg', 'template_ar72wrg', e.target, 'lNx5XGGgMWk5Uem-F')
      .then((result) => {
          console.log(result.text);
          setStatus("Send Message");
          alert(result.status);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();

  }
  

  return (
    <div id='contact'>
      {/* <!--Contact--> */}

<section className="ctForm " id="contact">
  <div className="form-title">
        <h1 className='title'>Get In Touch</h1>
                  
  </div>
  <div className="form-container">
    <form  className='formCt' onSubmit={sendEmail}>
      <div className="sectionCt">
          <div className="detailCt" style={{zIndex : '1000 !important'}}>
            <input type="text" name="name"  placeholder="Name" required id="name"/>
          </div>
          <div className="detailCt">
            <input type="email" name="email"  placeholder="Email" required id="email"/>
          </div>
      </div>
      <div className="sectionCt">
         <div className="">
            <textarea name="message" id="messagealert" cols="76" rows="10" placeholder="Message"></textarea>
         </div>
      </div>
      <div className='sectionCt'>
      <button type="submit" className='btn'>{status}</button>
      </div>
      
    </form>	
    

    </div>
      
  
</section>
{/* <!--/Contact--> */}
    </div>
  )
}

export default Contact