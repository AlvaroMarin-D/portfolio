import React, {useRef} from 'react';
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import emailjs from 'emailjs-com'
import {BsLinkedin,BsFillTelephoneFill} from 'react-icons/bs'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE, process.env.REACT_APP_EMAILJS_TEMPLATE, form.current, process.env.REACT_APP_EMAILJS_KEY)
    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <HiOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>alvaromarin.d@gmail.com</h5>
            <a href="mailto:alvaromarin.d@gmail.com"target="_blank" rel='noreferrer'>Send an email</a>
          </article>
          <article className='contact_option'>
            <BsLinkedin className='contact_option-icon'/>
            <h4>Linkedin</h4>
            <h5>Alvaro Marin</h5>
            <a href="https://www.linkedin.com/in/alvaro-marin77/" target="_blank" rel='noreferrer'>View Profile</a>
          </article>
          <article className='contact_option'>
            <BsFillTelephoneFill className='contact_option-icon'/>
            <h4>Phone</h4>
            <h5>613 806 6868</h5>
            <a href="tel:613-806-6868"target="_blank" rel='noreferrer'>Give a Call</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/> 
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact