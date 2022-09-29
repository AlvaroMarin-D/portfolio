import React from 'react'
import './portfolio.css'
import Img1 from '../../assets/portfolio1.jpg'
import Img2 from '../../assets/portfolio2.jpg'
import Img3 from '../../assets/portfolio3.jpg'
import Img4 from '../../assets/portfolio4.jpg'
import Img5 from '../../assets/portfolio5.png'
import Img6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id:1,
    image:Img1,
    title: 'CampSite',
    github: 'https://github.com/AlvaroMarin-D/CampSite',
    demo: 'https://peaceful-island-49420.herokuapp.com'
  },
  {
    id:2,
    image:Img2,
    title: 'Dashboard',
    github: 'https://github.com/AlvaroMarin-D/dashboard',
    demo: 'https://github.com'
  },
  {
    id:3,
    image:Img3,
    title: 'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id:4,
    image:Img4,
    title: 'Maintaing tasks and tracking progress',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id:5,
    image:Img5,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id:6,
    image:Img6,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://github.com'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        {
          data.map(({id,image,title,github,demo}) => {
            return(
              <article key={id} className='portfolio_item'>
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio_item-cta'>
                  <a href={github} className='btn ' target='_blank' rel='noreferrer'>Github</a>
                  <a href={demo} className='btn btn-primary ' target='_blank' rel='noreferrer'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio

