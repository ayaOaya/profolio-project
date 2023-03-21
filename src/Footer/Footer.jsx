import React, { useRef } from 'react'
import "./style.scss"
import emailjs from '@emailjs/browser';

export default function Footer() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cv5lr4c', 'template_7d7wz0i', form.current, 'syYIyxIRot1ha9xPT')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };


  return (
    <>
    <div className="footer">
    <div className="container">
      <h1 className="contact-h1">LET CHAT!</h1>
      <form ref={form} onSubmit={sendEmail} className='form'>
        <h4 className="names-h4">Full Name</h4>
        <input type="text" placeholder='your full name' required name='user_name'/>

        <h4 className="names-h4">Email</h4>
        <input type="email" placeholder='your email' required name='user_email'/>

        <h4 className="names-h4">Email</h4>
       <textarea name="message"  cols="30" rows="10" placeholder='your message'></textarea>
       <button type='submit' className='btn-contact' >Send</button>
      </form>
    </div>
    </div>

    </>
  )
}
