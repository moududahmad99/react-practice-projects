// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import './style.css'

// const Navbar = () => {
//     return (
//         <>
//             <nav className='router-nav'>
//                 <ul>
//                     <li>
//                         <NavLink to="/home">Home</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/about">About</NavLink>                    
//                     </li>
//                     <li>
//                         <NavLink to="/portfolio">Portfolio</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/contact">Contact</NavLink>
//                     </li>
//                 </ul>
//             </nav>
//         </>
//     )
// }

// export default Navbar;
import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'


const Navbar = () => {

    return (
        <>
            <nav className='router-nav'>
                <div className='container'>
                    <div className='navbar-wrapper'>
                        <div className='navbar-logo'>
                            <h3>Moudud</h3>
                        </div>
                        <div className='navbar-links'>
                            <ul>
                                <li>
                                    <NavLink to='/home'>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/portfolio'>Portfolio</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/contact'>Contact</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/about'>About</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;