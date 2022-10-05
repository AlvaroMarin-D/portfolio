import React from 'react'
import './testimonials.css'
import Avatar1 from '../../assets/avatar1.jpg';
import Avatar2 from '../../assets/avatar2.jpg';
import Avatar3 from '../../assets/avatar3.jpg';



import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Autoplay, Pagination, Navigation } from "swiper";

const testData = [
  {
    Avatar:Avatar1,
    name: 'Joel Mathew',
    review:'A true professional that loves to contribute ideas and ensures fellow teammates are all on the same page'
  },
  {
    Avatar:Avatar2,
    name: 'Zena Bamboat',
    review:'Has a appetite for learning and is constantly looking for ways to improve and move forward'
  },
  {
    Avatar:Avatar3,
    name: 'Jordan Brazu-Henrie',
    review:'Demonstrates leadership qualities and is able to find solutions to problems in a quick and effective way'
  },

]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from people</h5>
      <h2>Testimonials</h2>

      <Swiper 
      pagination={{
        clickable:true,
      }} 
      autoplay= {{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation = {true}
      loop = {true}
      spaceBetween={30}
      slidesPerView={1}
      modules={[Autoplay, Pagination, Navigation]} 
      className="container testimonials_contianer mySwiper">
      {
        testData.map(({Avatar,name,review},index) => {
          return (
            <SwiperSlide key={index} className='testimonial'>
              <div className="client_avatar">
                <img src={Avatar} alt="Client avatar" />
              </div>
              <h5 className='client_name'>{name}</h5>
              <small className='client_review'>
              {review}
              </small>
            </SwiperSlide>
          )
        })
      }
      
      </Swiper>

    </section>
  )
}

export default Testimonials

