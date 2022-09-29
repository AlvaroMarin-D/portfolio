import React from 'react'
import './testimonials.css'
import Avatar1 from '../../assets/avatar1.jpg';
import Avatar2 from '../../assets/avatar2.jpg';
import Avatar3 from '../../assets/avatar3.jpg';
import Avatar4 from '../../assets/avatar4.jpg';


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Autoplay, Pagination, Navigation } from "swiper";

const testData = [
  {
    Avatar:Avatar1,
    name: 'Tina Snow',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus commodi quia impedit beatae sed facilis mollitia. Excepturi cumque eaque, architecto officia laudantium illum quibusdam sapiente deleniti, nobis ipsam iste aliquid.'
  },
  {
    Avatar:Avatar2,
    name: 'Tina Snow',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus commodi quia impedit beatae sed facilis mollitia. Excepturi cumque eaque, architecto officia laudantium illum quibusdam sapiente deleniti, nobis ipsam iste aliquid.'
  },
  {
    Avatar:Avatar3,
    name: 'Tina Snow',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus commodi quia impedit beatae sed facilis mollitia. Excepturi cumque eaque, architecto officia laudantium illum quibusdam sapiente deleniti, nobis ipsam iste aliquid.'
  },
  {
    Avatar:Avatar4,
    name: 'Tina Snow',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus commodi quia impedit beatae sed facilis mollitia. Excepturi cumque eaque, architecto officia laudantium illum quibusdam sapiente deleniti, nobis ipsam iste aliquid.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
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

