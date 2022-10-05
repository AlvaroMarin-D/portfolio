import React from 'react'
import './about.css';
import ME from '../../assets/me-about.jpg';
import {FaAward,FaRegFolderOpen} from 'react-icons/fa';
import {IoSchoolSharp} from 'react-icons/io5'

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
                <small>5+years Learning</small>
              </article>

              <article className='about_card'>
                <IoSchoolSharp className='about_icon'/>
                <h5>School</h5>
                <small>Carleton University</small>
              </article>

              <article className='about_card'>
                <FaRegFolderOpen className='about_icon'/>
                <h5>Projects</h5>
                <small>6+ completed</small>
              </article>

            </div>
            <p>
              Passionate Electrical Engineering Graduate from Carleton University with a strong interest in web/software development.
              Created various applications in order to improve and showcase developer skills. Seeking opportunities to further grow my 
              career as a developer.
            </p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
      </div>
    </section>
  )
}

export default About