import React from 'react'
import './Testimonials.css'
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { FaComments } from 'react-icons/fa'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


const CustomLeftArrow = ({ onClick }) => (
  <div className="custom-slick-arrow custom-slick-prev" onClick={onClick}>
    <FaArrowLeft />
  </div>
);

const CustomRightArrow = ({ onClick }) => (
  <div className="custom-slick-arrow custom-slick-next" onClick={onClick}>
    <FaArrowRight />
  </div>
);

const Testimonials = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomLeftArrow />,
    nextArrow: <CustomRightArrow />,
    responsive: [
      {
          breakpoint: 990,
          settings: {
              slidesToShow: 1
          }
      }
  ]
  };

  return (
    <div className='bg-[#F7F5EB]'>
      <div id="testimonials-wrapper" className='pb-10 pt-44 mt-24 Grid'>
        <h3 className='font-bold uppercase'> \\ Testimonitals</h3>
        <h1 className='text-6xl font-bold py-4'>Clients Feedbacks <span>.</span></h1>
        <Slider {...settings}>
          <div className='testimonials-card my-4'>
            <div className='testimonials-card--inner flex'>
              <img src="/assets/1.jpg" alt="testimonials" />
              <div className='text-start px-4 testiCardRes'>
                <p className='font-normal text-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis molestiae rerum eaque adipisicing elit. Quis molestiae rerum eaque veniam, optio ipsam.</p>
                <h4 className='font-bold text-xl my-2'>Rosaline D. William</h4>
                <h5 className='font-semibold'>Founder</h5>
              </div>
              <i className='text-7xl'><FaComments /></i>
            </div>
          </div>
          <div className='testimonials-card my-4'>
            <div className='testimonials-card--inner flex'>
              <img src="/assets/5.jpg" alt="testimonials" />
              <div className='text-start px-4 testiCardRes'>
                <p className='font-normal text-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis molestiae rerum eaque adipisicing elit. Quis molestiae rerum eaque veniam, optio ipsam.</p>
                <h4 className='font-bold text-xl my-2'>Rosaline D. William</h4>
                <h5 className='font-semibold'>Founder</h5>
              </div>
              <i className='text-7xl'><FaComments /></i>
            </div>
          </div>
          <div className='testimonials-card my-4'>
            <div className='testimonials-card--inner flex'>
              <img src="/assets/6.jpg" alt="testimonials" />
              <div className='text-start px-4 testiCardRes'>
                <p className='font-normal text-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis molestiae rerum eaque adipisicing elit. Quis molestiae rerum eaque veniam, optio ipsam.</p>
                <h4 className='font-bold text-xl my-2'>Rosaline D. William</h4>
                <h5 className='font-semibold'>Founder</h5>
              </div>
              <i className='text-7xl'><FaComments /></i>
            </div>
          </div>
          <div className='testimonials-card my-4'>
            <div className='testimonials-card--inner flex'>
              <img src="/assets/7.jpg" alt="testimonials" />
              <div className='text-start px-4 testiCardRes'>
                <p className='font-normal text-md'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis molestiae rerum eaque adipisicing elit. Quis molestiae rerum eaque veniam, optio ipsam.</p>
                <h4 className='font-bold text-xl my-2'>Rosaline D. William</h4>
                <h5 className='font-semibold'>Founder</h5>
              </div>
              <i className='text-7xl'><FaComments /></i>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Testimonials