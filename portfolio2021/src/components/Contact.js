import React from 'react';
import emailjs from 'emailjs-com'


export default function ContactUs(){
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_riaxfzq', 'template_llt28nl', e.target, 'user_jo788C3qddJzbJBMh3tyi')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }
  return(
   
    <form className="contact-form" id ='contact' onSubmit={sendEmail}>
        <div className ="section-head">
          <div className ="col header-col">
          <h1><span>Contact</span></h1>
          </div>
        </div>
     <div className ='row'>
     <label>Name</label>
    <input type="text" name="name" />
    
    <label>Email</label>
    <input type="email" name="email" />
    
    <label>Subject</label>
    <input type="text" name="subject" />
    
    <label>Message</label>
    <textarea name="message" />
   
    <input className="submit" type="submit" value="Send Message" />
     </div>

    


    
  </form>
  )
}