import React from 'react';
import './style.css';
import { BsStarFill } from 'react-icons/bs'
import { BsStarHalf } from 'react-icons/bs'

function ProductsOne() {

    return (
        <>
            <nav className='products-navbar'>
                <div class="container">
                    <div class="logo">Moudud</div>
                    <ul class="menu">
                        <li><a href="/#">Account</a></li>
                    </ul>
                </div>
            </nav>
            {/* Product Navbar */}
            <div className='popular-products'>
                <div className='container'>
                    <div className='popular-productsNav'>
                        <div className='popular-productsInner'>
                            <h3>Popular products</h3>
                        </div>
                        <div className='popular-productsInner'>
                            <ul>
                                <li><a href="##">Camera</a></li>
                                <li><a href="##">Laptops</a></li>
                                <li><a href="##">Tablets</a></li>
                                <li><a href="##">Mouse</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='popular-productsCard'>
                        <div className='popular-productsCardInner'>
                            <picture>
                                <img src="./assets/headphone.png" alt="headphone" />
                            </picture>
                            <div className='productsCardInnerDescription'>
                                <h3>Wireless headphones</h3>
                                <h5>$11,70</h5>
                                <i><BsStarFill /></i>
                                <i><BsStarFill /></i>
                                <i><BsStarFill /></i>
                                <i><BsStarFill /></i>
                                <i><BsStarHalf /></i>
                            </div>
                        </div>
                        <div className='popular-productsCardInner'>
                            <picture>
                                <img src="./assets/gamepad.png" alt="Gamepad" />
                            </picture>
                            <div className='productsCardInnerDescription'>
                                <h3>Play Game</h3>
                                <h5>$11,70</h5>
                                <i><BsStarFill /></i>
                                <i><BsStarFill /></i>
                                <i><BsStarFill /></i>
                                <i><BsStarFill /></i>
                                <i><BsStarFill /></i>
                            </div>
                        </div>
                        <div className='popular-productsCardInner'>
                            <picture>
                                <img src="./assets/headphone.png" alt="headphone" />
                            </picture>
                            <div className='productsCardInnerDescription'>
                                <h3>Wireless headphones</h3>
                                <h5>$11,70</h5>
                                <i><BsStarFill /></i>
                                <i><BsStarFill /></i>
                                <i><BsStarFill /></i>
                                <i><BsStarFill /></i>
                                <i><BsStarHalf /></i>
                            </div>
                        </div>
                        <div className='popular-productsCardInner'>
                            <picture>
                                <img src="./assets/laptop.png" alt="Laptop" />
                            </picture>
                            <div className='productsCardInnerDescription'>
                                <h3>Tablet as a laptop</h3>
                                <h5>$11,70</h5>
                                <i><BsStarFill /></i>
                                <i><BsStarFill /></i>
                                <i><BsStarFill /></i>
                                <i><BsStarFill /></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductsOne;