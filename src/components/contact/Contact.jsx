import React, {useRef} from 'react';
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {RiMessengerLine,RiWhatsappLine} from 'react-icons/ri'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cmhkbkq', 'template_ryub9i3', form.current, 'I_6d1sqksiQfOgPM8')
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
            <h5>alvaro.m1818@gmail.com</h5>
            <a href="mailto:alvaro.m1818@gmail.com"target="_blank" rel='noreferrer'>Send a message</a>
          </article>
          <article className='contact_option'>
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Alvaro Marin</h5>
            <a href="https://github.com" target="_blank" rel='noreferrer'>Send a message</a>
          </article>
          <article className='contact_option'>
            <RiWhatsappLine className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>613 806 6868</h5>
            <a href="https://api.whatsapp.com/send?phone=+16138066868"target="_blank" rel='noreferrer'>Send a message</a>
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