import React from 'react'
import './footer.css'
import {BsLinkedin,BsGithub} from 'react-icons/bs'
import {TbCertificate} from 'react-icons/tb'

const Footer = () => {
  return (
    <footer>
      <a href="#header" className='footer_logo'>Alvaro Marin</a>

      <ul className='permalinks'>
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/alvaro-marin77/" target="_blank" rel='noreferrer'> <BsLinkedin/> </a>
        <a href="https://github.com/AlvaroMarin-D" target="_blank" rel='noreferrer'> <BsGithub/> </a>
        <a href="https://www.credly.com/users/alvaromarin" target="_blank" rel='noreferrer'> <TbCertificate/> </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Alvaro Marin. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer