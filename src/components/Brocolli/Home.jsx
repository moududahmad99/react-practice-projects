import React from 'react'
import Topbar from './topbar/Topbar'
import Navbar from './navbar/Navbar'
import Banner from './banner/Banner'
import Shop from './shop/Shop'
import FeaturedProducts from './featuredProducts/FeaturedProducts'
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
            <FeaturedProducts />
            <Testimonials />
            <Blog />
            <Footer />
        </div>
    )
}

export default Brocolli;