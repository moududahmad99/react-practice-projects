import React from 'react'
import './Blog.css'
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { MdDesignServices } from 'react-icons/md'
import { BsCalendar3 } from 'react-icons/bs'
import { FaArrowLeft, FaArrowRight, FaRegUser } from 'react-icons/fa';


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


const Blog = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <CustomLeftArrow />,
        nextArrow: <CustomRightArrow />
    };


    return (
        <div className='bg-[#FFFFFF]'>
            <div className="Grid">
                <div id="blog-wrapper" className='mt-24 mb-44'>
                    <h1 className='text-6xl font-bold py-4'>Latest Blog</h1>
                    <Slider {...settings}>
                        <div className='blog-card my-8'>
                            <div className='blog-card--inner'>
                                <img src="/assets/blog-1.jpg" alt="blog" />
                                <div className='text-start px-10'>
                                    <div className='flex py-5'>
                                        <div className='flex items-center'>
                                            <i><FaRegUser /></i>
                                            <p className='font-semibold text-md pl-2'>by: Admin</p>
                                        </div>
                                        <div className='flex items-center ml-5'>
                                            <i><MdDesignServices /></i>
                                            <p className='font-semibold text-md pl-2'>Service</p>
                                        </div>
                                    </div>
                                    <p className='font-normal text-md'></p>
                                    <h4 className='font-bold text-2xl pr-6 pb-3'>How and when to replace brake rotors</h4>
                                    <hr className='pb-4' />
                                    <div className='flex pb-5 justify-between'>
                                        <div className='flex items-center'>
                                            <i><BsCalendar3 /></i>
                                            <p className='font-semibold text-md pl-2'>July-23, 2023</p>
                                        </div>
                                        <div className='flex items-center ml-5'>
                                            <a href='##' className='font-semibold uppercase text-md pl-2'>Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='blog-card my-8'>
                            <div className='blog-card--inner'>
                                <img src="/assets/blog-2.jpg" alt="blog" />
                                <div className='text-start px-10'>
                                    <div className='flex py-5'>
                                        <div className='flex items-center'>
                                            <i><FaRegUser /></i>
                                            <p className='font-semibold text-md pl-2'>by: Admin</p>
                                        </div>
                                        <div className='flex items-center ml-5'>
                                            <i><MdDesignServices /></i>
                                            <p className='font-semibold text-md pl-2'>Service</p>
                                        </div>
                                    </div>
                                    <p className='font-normal text-md'></p>
                                    <h4 className='font-bold text-2xl pr-6 pb-3'>How and when to replace brake rotors</h4>
                                    <hr className='pb-4' />
                                    <div className='flex pb-5 justify-between'>
                                        <div className='flex items-center'>
                                            <i><BsCalendar3 /></i>
                                            <p className='font-semibold text-md pl-2'>July-23, 2023</p>
                                        </div>
                                        <div className='flex items-center ml-5'>
                                            <a href='##' className='font-semibold uppercase text-md pl-2'>Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='blog-card my-8'>
                            <div className='blog-card--inner'>
                                <img src="/assets/blog-3.jpg" alt="blog" />
                                <div className='text-start px-10'>
                                    <div className='flex py-5'>
                                        <div className='flex items-center'>
                                            <i><FaRegUser /></i>
                                            <p className='font-semibold text-md pl-2'>by: Admin</p>
                                        </div>
                                        <div className='flex items-center ml-5'>
                                            <i><MdDesignServices /></i>
                                            <p className='font-semibold text-md pl-2'>Service</p>
                                        </div>
                                    </div>
                                    <p className='font-normal text-md'></p>
                                    <h4 className='font-bold text-2xl pr-6 pb-3'>How and when to replace brake rotors</h4>
                                    <hr className='pb-4' />
                                    <div className='flex pb-5 justify-between'>
                                        <div className='flex items-center'>
                                            <i><BsCalendar3 /></i>
                                            <p className='font-semibold text-md pl-2'>July-23, 2023</p>
                                        </div>
                                        <div className='flex items-center ml-5'>
                                            <a href='##' className='font-semibold uppercase text-md pl-2'>Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='blog-card my-8'>
                            <div className='blog-card--inner'>
                                <img src="/assets/blog-1.jpg" alt="blog" />
                                <div className='text-start px-10'>
                                    <div className='flex py-5'>
                                        <div className='flex items-center'>
                                            <i><FaRegUser /></i>
                                            <p className='font-semibold text-md pl-2'>by: Admin</p>
                                        </div>
                                        <div className='flex items-center ml-5'>
                                            <i><MdDesignServices /></i>
                                            <p className='font-semibold text-md pl-2'>Service</p>
                                        </div>
                                    </div>
                                    <p className='font-normal text-md'></p>
                                    <h4 className='font-bold text-2xl pr-6 pb-3'>How and when to replace brake rotors</h4>
                                    <hr className='pb-4' />
                                    <div className='flex pb-5 justify-between'>
                                        <div className='flex items-center'>
                                            <i><BsCalendar3 /></i>
                                            <p className='font-semibold text-md pl-2'>July-23, 2023</p>
                                        </div>
                                        <div className='flex items-center ml-5'>
                                            <a href='##' className='font-semibold uppercase text-md pl-2'>Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Blog