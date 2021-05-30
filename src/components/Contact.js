import React from 'react';
import emailjs from 'emailjs-com'


export default function ContactUs(){
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_riaxfzq', 'template_llt28nl', e.target, 'user_jo788C3qddJzbJBMh3tyi')
          .then((result) => {
              console.log(result.text);
              document.getElementById('message');
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
          <aside className='lead'>
      
      <h4>Address and Phone</h4>
      <p>1302 Leaf Terrace</p>
      <p>San Diego, CA 92114</p>
      <span>(619)636-2857</span>

    
  </aside>
          </div>
          
        </div>
<div className ='container'>
<div className ='row'>
<div>
  <label>Name</label>
    <input type="text" name="name" />
  </div>
     
  <div>
  <label>Email</label>
    <input type="email" name="email" />
  </div>
    
    <div>
    <label>Subject</label>
    <input type="text" name="subject" />
    </div>
    
    <div>
    <label>Message</label>
    <textarea name="message" />
    </div>
    
   <div>
   <input className="submit" type="submit" value="Send Message" />
   </div>
  
</div>
  

</div>


     <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>

      
  </form>
  
  
  )
}