import React from 'react'
import './FeaturedProducts.css'

import { AiOutlineStar, AiFillStar, AiTwotoneShopping } from 'react-icons/ai'
import { BiSolidStarHalf } from 'react-icons/bi'
import { GoEye } from 'react-icons/go'
import { FiHeart } from 'react-icons/fi'

import { motion } from 'framer-motion';

const FeaturedProducts = () => {
  return (
    <div>
      <div className="bg-[#FFFFFF]">
        <div className="Grid">
          <div id="featProducts">
            <h1 className='text-5xl text-center font-bold mt-10 pt-14 mb-8'>Featured Products</h1>
            <div className='featProducts-inner flex'>
              <div className='featProductResponsive flex'>
                <div className="w-6/12 featProdResInner">
                  <div className="featProducts-card mx-4 my-5 pb-5">
                    <picture>
                      <img src="/assets/FeaturedProducts-1.png" alt="Featured Product" />
                    </picture>
                    <div className='new-arrival'>
                      <h6 className='uppercase font-bold'>New</h6>
                    </div>
                    <div className='featProducts-desc'>
                      <div className='flex items-center pt-8 pl-5 pb-2'>
                        <i><AiFillStar /></i>
                        <i><AiFillStar /></i>
                        <i><AiFillStar /></i>
                        <i><BiSolidStarHalf /></i>
                        <i><AiOutlineStar /></i>
                      </div>
                      <h4 className='font-semibold text-lg pl-5 py-1'>Carrot Group Scale</h4>
                      <h3 className='font-bold text-2xl pl-5'>$32.00 <span>$46.00</span></h3>
                    </div>
                    <div className="featured-hoverIcons">
                      <motion.ul
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1.2 } }}
                        exit={{ opacity: 0, y: 40 }}
                        transition={{ duration: 1 }}
                      >
                        <ul className='flex'>
                          <li className='mr-3 cursor-pointer rounded-full p-3 text-xl'><i><GoEye /></i></li>
                          <li className='mr-3 cursor-pointer rounded-full p-3 text-xl'><i><AiTwotoneShopping /></i></li>
                          <li className='p-3 cursor-pointer rounded-full text-xl'><i><FiHeart /></i></li>
                        </ul>
                      </motion.ul>
                    </div>
                  </div>
                </div>
                <div className="w-6/12 featProdResInner">
                  <div className="featProducts-card mx-4 my-5 pb-5">
                    <picture>
                      <img src="/assets/FeaturedProducts-2.png" alt="Featured Product" />
                    </picture>
                    <div className='featProducts-desc'>
                      <div className='flex items-center pt-8 pl-5 pb-2'>
                        <i><AiFillStar /></i>
                        <i><AiFillStar /></i>
                        <i><AiFillStar /></i>
                        <i><BiSolidStarHalf /></i>
                        <i><AiOutlineStar /></i>
                      </div>
                      <h4 className='font-semibold text-lg pl-5 py-1'>Red Hot Tomato</h4>
                      <h3 className='font-bold text-2xl pl-5'>$32.00 <span>$46.00</span></h3>
                    </div>
                    <div className="featured-hoverIcons">
                      <motion.ul
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1.2 } }}
                        exit={{ opacity: 0, y: 40 }}
                        transition={{ duration: 1 }}
                      >
                        <ul className='flex'>
                          <li className='mr-3 cursor-pointer rounded-full p-3 text-xl'><i><GoEye /></i></li>
                          <li className='mr-3 cursor-pointer rounded-full p-3 text-xl'><i><AiTwotoneShopping /></i></li>
                          <li className='p-3 cursor-pointer rounded-full text-xl'><i><FiHeart /></i></li>
                        </ul>
                      </motion.ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className='featProductResponsive flex'>
                <div className="w-6/12 featProdResInner">
                  <div className="featProducts-card mx-4 my-5 pb-5">
                    <picture>
                      <img src="/assets/FeaturedProducts-3.png" alt="Featured Product" />
                    </picture>
                    <div className='new-arrival'>
                      <h6 className='uppercase font-bold'>New</h6>
                    </div>
                    <div className='featProducts-desc'>
                      <div className='flex items-center pt-8 pl-5 pb-2'>
                        <i><AiFillStar /></i>
                        <i><AiFillStar /></i>
                        <i><AiFillStar /></i>
                        <i><BiSolidStarHalf /></i>
                        <i><AiOutlineStar /></i>
                      </div>
                      <h4 className='font-semibold text-lg pl-5 py-1'>Orange Fresh Juice</h4>
                      <h3 className='font-bold text-2xl pl-5'>$32.00 <span>$46.00</span></h3>
                    </div>
                    <div className="featured-hoverIcons">

                      <motion.ul
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1.2 } }}
                        exit={{ opacity: 0, y: 40 }}
                        transition={{ duration: 1 }}
                      >
                        <ul className='flex'>
                          <li className='mr-3 cursor-pointer rounded-full p-3 text-xl'><i><GoEye /></i></li>
                          <li className='mr-3 cursor-pointer rounded-full p-3 text-xl'><i><AiTwotoneShopping /></i></li>
                          <li className='p-3 cursor-pointer rounded-full text-xl'><i><FiHeart /></i></li>
                        </ul>
                      </motion.ul>
                    </div>
                  </div>
                </div>
                <div className="w-6/12 featProdResInner">
                  <div className="featProducts-card mx-4 my-5 pb-5">
                    <picture>
                      <img src="/assets/FeaturedProducts-1.png" alt="Featured Product" />
                    </picture>
                    <div className='new-arrival'>
                      <h6 className='uppercase font-bold'>New</h6>
                    </div>
                    <div className='featProducts-desc'>
                      <div className='flex items-center pt-8 pl-5 pb-2'>
                        <i><AiFillStar /></i>
                        <i><AiFillStar /></i>
                        <i><AiFillStar /></i>
                        <i><BiSolidStarHalf /></i>
                        <i><AiOutlineStar /></i>
                      </div>
                      <h4 className='font-semibold text-lg pl-5 py-1'>Poltry Farm Meat</h4>
                      <h3 className='font-bold text-2xl pl-5'>$32.00 <span>$46.00</span></h3>
                    </div>
                    <div className="featured-hoverIcons">

                      <motion.ul
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1.2 } }}
                        exit={{ opacity: 0, y: 40 }}
                        transition={{ duration: 1 }}
                      >
                        <ul className='flex'>
                          <li className='mr-3 cursor-pointer rounded-full p-3 text-xl'><i><GoEye /></i></li>
                          <li className='mr-3 cursor-pointer rounded-full p-3 text-xl'><i><AiTwotoneShopping /></i></li>
                          <li className='p-3 cursor-pointer rounded-full text-xl'><i><FiHeart /></i></li>
                        </ul>
                      </motion.ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='featProducts-inner flex'>
              <div className='featProductResponsive flex'>
                <div className="w-6/12 featProdResInner">
                  <div className="featProducts-card mx-4 my-5 pb-5">
                    <picture>
                      <img src="/assets/FeaturedProducts-5.png" alt="Featured Product" />
                    </picture>
                    <div className='new-arrival'>
                      <h6 className='uppercase font-bold'>New</h6>
                    </div>
                    <div className='featProducts-desc'>
                      <div className='flex items-center pt-8 pl-5 pb-2'>
                        <i><AiFillStar /></i>
                        <i><AiFillStar /></i>
                        <i><AiFillStar /></i>
                        <i><BiSolidStarHalf /></i>
                        <i><AiOutlineStar /></i>
                      </div>
                      <h4 className='font-semibold text-lg pl-5 py-1'>Carrot Group Scale</h4>
                      <h3 className='font-bold text-2xl pl-5'>$32.00 <span>$46.00</span></h3>
                    </div>
                    <div className="featured-hoverIcons">

                      <motion.ul
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1.2 } }}
                        exit={{ opacity: 0, y: 40 }}
                        transition={{ duration: 1 }}
                      >
                        <ul className='flex'>
                          <li className='mr-3 cursor-pointer rounded-full p-3 text-xl'><i><GoEye /></i></li>
                          <li className='mr-3 cursor-pointer rounded-full p-3 text-xl'><i><AiTwotoneShopping /></i></li>
                          <li className='p-3 cursor-pointer rounded-full text-xl'><i><FiHeart /></i></li>
                        </ul>
                      </motion.ul>
                    </div>
                  </div>
                </div>
                <div className="w-6/12 featProdResInner">
                  <div className="featProducts-card mx-4 my-5 pb-5">
                    <picture>
                      <img src="/assets/FeaturedProducts-6.png" alt="Featured Product" />
                    </picture>
                    <div className='featProducts-desc'>
                      <div className='flex items-center pt-8 pl-5 pb-2'>
                        <i><AiFillStar /></i>
                        <i><AiFillStar /></i>
                        <i><AiFillStar /></i>
                        <i><BiSolidStarHalf /></i>
                        <i><AiOutlineStar /></i>
                      </div>
                      <h4 className='font-semibold text-lg pl-5 py-1'>Red Hot Tomato</h4>
                      <h3 className='font-bold text-2xl pl-5'>$32.00 <span>$46.00</span></h3>
                    </div>
                    <div className="featured-hoverIcons">

                      <motion.ul
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1.2 } }}
                        exit={{ opacity: 0, y: 40 }}
                        transition={{ duration: 1 }}
                      >
                        <ul className='flex'>
                          <li className='mr-3 cursor-pointer rounded-full p-3 text-xl'><i><GoEye /></i></li>
                          <li className='mr-3 cursor-pointer rounded-full p-3 text-xl'><i><AiTwotoneShopping /></i></li>
                          <li className='p-3 cursor-pointer rounded-full text-xl'><i><FiHeart /></i></li>
                        </ul>
                      </motion.ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className='featProductResponsive flex'>
                <div className="w-6/12 featProdResInner">
                  <div className="featProducts-card mx-4 my-5 pb-5">
                    <picture>
                      <img src="/assets/FeaturedProducts-7.png" alt="Featured Product" />
                    </picture>
                    <div className='new-arrival'>
                      <h6 className='uppercase font-bold'>New</h6>
                    </div>
                    <div className='featProducts-desc'>
                      <div className='flex items-center pt-8 pl-5 pb-2'>
                        <i><AiFillStar /></i>
                        <i><AiFillStar /></i>
                        <i><AiFillStar /></i>
                        <i><BiSolidStarHalf /></i>
                        <i><AiOutlineStar /></i>
                      </div>
                      <h4 className='font-semibold text-lg pl-5 py-1'>Orange Fresh Juice</h4>
                      <h3 className='font-bold text-2xl pl-5'>$32.00 <span>$46.00</span></h3>
                    </div>
                    <div className="featured-hoverIcons">

                      <motion.ul
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1.2 } }}
                        exit={{ opacity: 0, y: 40 }}
                        transition={{ duration: 1 }}
                      >
                        <ul className='flex'>
                          <li className='mr-3 cursor-pointer rounded-full p-3 text-xl'><i><GoEye /></i></li>
                          <li className='mr-3 cursor-pointer rounded-full p-3 text-xl'><i><AiTwotoneShopping /></i></li>
                          <li className='p-3 cursor-pointer rounded-full text-xl'><i><FiHeart /></i></li>
                        </ul>
                      </motion.ul>
                    </div>
                  </div>
                </div>
                <div className="w-6/12 featProdResInner">
                  <div className="featProducts-card mx-4 my-5 pb-5">
                    <picture>
                      <img src="/assets/FeaturedProducts-8.png" alt="Featured Product" />
                    </picture>
                    <div className='new-arrival'>
                      <h6 className='uppercase font-bold'>New</h6>
                    </div>
                    <div className='featProducts-desc'>
                      <div className='flex items-center pt-8 pl-5 pb-2'>
                        <i><AiFillStar /></i>
                        <i><AiFillStar /></i>
                        <i><AiFillStar /></i>
                        <i><BiSolidStarHalf /></i>
                        <i><AiOutlineStar /></i>
                      </div>
                      <h4 className='font-semibold text-lg pl-5 py-1'>Poltry Farm Meat</h4>
                      <h3 className='font-bold text-2xl pl-5'>$32.00 <span>$46.00</span></h3>
                    </div>
                    <div className="featured-hoverIcons">

                      <motion.ul
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1.2 } }}
                        exit={{ opacity: 0, y: 40 }}
                        transition={{ duration: 1 }}
                      >
                        <ul className='flex'>
                          <li className='mr-3 cursor-pointer rounded-full p-3 text-xl'><i><GoEye /></i></li>
                          <li className='mr-3 cursor-pointer rounded-full p-3 text-xl'><i><AiTwotoneShopping /></i></li>
                          <li className='p-3 cursor-pointer rounded-full text-xl'><i><FiHeart /></i></li>
                        </ul>
                      </motion.ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProducts;