import React from 'react'
import './portfolio.css'
import Img1 from '../../assets/portfolio1.jpg'
import Img2 from '../../assets/portfolio2.jpg'
import Img3 from '../../assets/portfolio3.jpg'
import Img4 from '../../assets/portfolio4.jpg'
import Img5 from '../../assets/portfolio5.jpg'
import Img6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id:1,
    image:Img1,
    title: 'CampSite',
    github: 'https://github.com/AlvaroMarin-D/CampSite',
    demo: 'https://peaceful-island-49420.herokuapp.com',
    desc: 'Full Stack application, that contains authentication and authorization capabilities. Basic security features were implemented along with basic image upload functionality. Technologies: MongoDB, Mongoose, Express, Passport, Bootstrap, ejs, Nodejs'
  },
  {
    id:2,
    image:Img2,
    title: 'Dashboard',
    github: 'https://github.com/AlvaroMarin-D/dashboard',
    demo: 'https://dashboard-alvaromarin-d.vercel.app/',
    desc: 'Frontend application, to showcase basic frontend skills. Demonstrates basic routing, layout and styling. Does not contain full functionality(backend). Contains different theming options. Technologies: React, Nodejs, Syncfusion'
  },
  {
    id:3,
    image:Img3,
    title: 'Shop application',
    github: 'https://github.com/AlvaroMarin-D/shopping',
    demo: 'https://shopping-three-pi.vercel.app/',
    desc: 'Full Stack application, that contains purchasing capabilities and shopping cart management. Owner of the shop can easily upload new products to the shop and products will be displayed automatically. Technologies: NextJs, React, Nodejs, Stripe, Sanity'
  },
  {
    id:4,
    image:Img4,
    title: 'Crypto',
    github: 'https://github.com/AlvaroMarin-D/crypto',
    demo: 'https://crypto-silk-two.vercel.app/',
    desc: 'Web3 application, that allows the user to send and recieve cryptocurrency. Uses metamask wallet in order to conduct transactions. Latest transactions are reflected on the application. Technologies: Vite, Nodejs, React, Tailwind, Ethers, Chai'
  },
  {
    id:5,
    image:Img5,
    title: 'Restaurant',
    github: 'https://github.com/AlvaroMarin-D/restaurant',
    demo: 'https://restaurant-mu-seven.vercel.app/',
    desc: 'UI/UX application, that is single paged in order to show concept for a restaurant page. Contains no routing capabilities, since the primary purpose is to showcase the design of the page and how a user will interact with it. Technologies: React, Nodejs, GoogleFonts'
  },
  {
    id:6,
    image:Img6,
    title: 'Home finder',
    github: 'https://github.com/AlvaroMarin-D/rent',
    demo: 'https://rent-home-pi.vercel.app/',
    desc: 'Full Stack application, that recieves information from an API in order to fill Available homes within the UAE. Contains basic search functionality and basic templating practices. Technologies: Nextjs, React, axios, nprogress, Chakra-ui, Emotion, Millify'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <p className='container'>
        These projects are for demonstration purpose, in order to showcase different skills. When viewing the live demos please allow some time to load, as these are not production quality.
      </p>

      <div className='container portfolio_container'>
        {
          data.map(({id,image,title,github,demo,desc}) => {
            return(
              <article key={id} className='portfolio_item'>
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
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

