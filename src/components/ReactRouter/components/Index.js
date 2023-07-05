import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { SiGooglehome } from 'react-icons/si'
import './style.css'

const ReactRouter = () => {

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
                {/* Home Button */}
                <Link to='/' className='goBack'> <SiGooglehome /></Link>
            </nav>
        </>
    )
}

export default ReactRouter;