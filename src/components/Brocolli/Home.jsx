import React from 'react'
import Topbar from './topbar/Topbar'
import Navbar from './navbar/Navbar'
import Banner from './banner/Banner'
import Shop from './shop/Shop'
import Products from './products/Products'
import Countdown from './countdown/Countdown'
import FeaturedProducts from './featuredProducts/FeaturedProducts'
import YTVideo from './ytVideo/YTVideo'
import Testimonials from './testimonials/Testimonials'
import Blog from './blog/Blog'
import Footer from './footer/Footer'
import './Home.css'

const Brocolli = () => {
    return (
        <div>
           <Topbar />
            <Navbar />
            <Banner />
            <Shop />
            <Products />
            <Countdown />
            <FeaturedProducts />
            <YTVideo />
            <Testimonials />
            <Blog />
            <Footer />
        </div>
    )
}

export default Brocolli;