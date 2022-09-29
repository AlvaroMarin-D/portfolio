import React from 'react'
import './about.css';
import ME from '../../assets/me-about.jpg';
import {FaAward,FaUsers,FaRegFolderOpen} from 'react-icons/fa';

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
          <div className='about_me'>
            <div className='about_me-image'>
              <img src={ME} alt="myself" />
            </div>

          </div>
          <div className='about_content'>
            <div className='about_cards'>
              <article className='about_card'>
                <FaAward className='about_icon'/>
                <h5>Experience</h5>
                <small>3+years working</small>
              </article>

              <article className='about_card'>
                <FaUsers className='about_icon'/>
                <h5>Clients</h5>
                <small>200+ Worldwide</small>
              </article>

              <article className='about_card'>
                <FaRegFolderOpen className='about_icon'/>
                <h5>Projects</h5>
                <small>80+ completed</small>
              </article>

            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio quo ratione dolorum, molestiae amet nulla tempore fugiat neque. Minima quidem sapiente eum reiciendis fugiat, placeat a amet dignissimos voluptates laborum?
            </p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
      </div>
    </section>
  )
}

export default About