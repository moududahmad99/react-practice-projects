import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Styles.css'
import { FaAngleDoubleRight } from 'react-icons/fa';

const FrontProject = () => {

    const location = useLocation()

    if (
        location.pathname === '/brocolli' ||
        location.pathname === '/counter-up' ||
        location.pathname === '/movie-list' ||
        location.pathname === '/item-list' ||
        location.pathname === '/calculator' ||
        location.pathname === '/form-extension' ||
        location.pathname === '/basic-chatapp' ||
        location.pathname === '/simple-products-card' ||
        location.pathname === '/login-form' ||
        location.pathname === '/quiz-game' ||
        location.pathname === '/todo-list' ||
        location.pathname === '/user-list' ||
        location.pathname === '/github-search' 
    ) {
        return null
    }

    return (
        <React.Fragment>
            <nav className='projects-link-wrapper'>
                <h3>React Projects</h3>
                <ul>
                    <h4>Elementary</h4>
                    <li>
                        <NavLink to="/brocolli">Brocolli <FaAngleDoubleRight style={{ marginLeft: '4px' }} /> </NavLink>
                    </li>
                    <li>
                        <NavLink to="/counter-up">Counter <FaAngleDoubleRight style={{ marginLeft: '4px' }} /> </NavLink>
                    </li>
                    <li>
                        <NavLink to="/movie-list">Movie List <FaAngleDoubleRight style={{ marginLeft: '4px' }} /> </NavLink>
                    </li>
                    <li>
                        <NavLink to="/item-list">Item List <FaAngleDoubleRight style={{ marginLeft: '4px' }} /> </NavLink>
                    </li>
                    <li>
                        <NavLink to="/calculator">Calculator <FaAngleDoubleRight style={{ marginLeft: '4px' }} /> </NavLink>
                    </li>
                    <li>
                        <NavLink to="/form-extension">Form Extension <FaAngleDoubleRight style={{ marginLeft: '4px' }} /> </NavLink>
                    </li>
                    <li>
                        <NavLink to="/simple-products-card">Products Card <FaAngleDoubleRight style={{ marginLeft: '4px' }} /> </NavLink>
                    </li>
                    <li>
                        <NavLink to="/login-form">LoginForm <FaAngleDoubleRight style={{ marginLeft: '4px' }} /> </NavLink>
                    </li>
                    <li>
                        <NavLink to="/user-list">User List <FaAngleDoubleRight style={{ marginLeft: '4px' }} /> </NavLink>
                    </li>
                </ul>

                <div className="intermediate-projects">
                    <h4>Intermediate</h4>
                    <ul>
                        <li>
                            <NavLink to="/basic-chatapp">Chat App <FaAngleDoubleRight style={{ marginLeft: '4px' }} /> </NavLink>
                        </li>
                        <li>
                            <NavLink to="/quiz-game">Quiz Game <FaAngleDoubleRight style={{ marginLeft: '4px' }} /> </NavLink>
                        </li>
                        <li>
                            <NavLink to="/todo-list">Todo List <FaAngleDoubleRight style={{ marginLeft: '4px' }} /> </NavLink>
                        </li>
                        <li>
                            <NavLink to="/github-search">GitHub Search <FaAngleDoubleRight style={{ marginLeft: '4px' }} /> </NavLink>
                        </li>
                    </ul>
                </div>

                <span></span>
            </nav>
        </React.Fragment>
    )
}

export default FrontProject;