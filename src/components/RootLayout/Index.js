import React from 'react';
import { NavLink, useLocation  } from 'react-router-dom';

const Navbar = () => {

    const myLocation = useLocation()

    if (myLocation.pathname === '/counter-up') {
        return null
    }

    if (myLocation.pathname === '/movie-list') {
        return null
    }

    if (myLocation.pathname === '/item-list') {
        return null
    }

    if (myLocation.pathname === '/calculator') {
        return null
    }

    if (myLocation.pathname === '/form-extension') {
        return null
    }

    if (myLocation.pathname === '/basic-chatapp') {
        return null
    }

    if (myLocation.pathname === '/simple-products-card') {
        return null
    }

    if (myLocation.pathname === '/login-form') {
        return null
    }

    if (myLocation.pathname === '/quiz-game') {
        return null
    }

    if (myLocation.pathname === '/todo-list') {
        return null
    }

    if (myLocation.pathname === '/user-list') {
        return null
    }

    return (
        <React.Fragment>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/counter-up">Counter</NavLink>
                    </li>
                    <li>
                        <NavLink to="/movie-list">Movie List</NavLink>
                    </li>
                    <li>
                        <NavLink to="/item-list">Item List</NavLink>
                    </li>
                    <li>
                        <NavLink to="/calculator">Calculator</NavLink>
                    </li>
                    <li>
                        <NavLink to="/form-extension">Form Extension</NavLink>
                    </li>
                    <li>
                        <NavLink to="/basic-chatapp">Basic ChatApp</NavLink>
                    </li>
                    <li>
                        <NavLink to="/simple-products-card">Products Card</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login-form">LoginForm</NavLink>
                    </li>
                    <li>
                        <NavLink to="/quiz-game">Quiz Game</NavLink>
                    </li>
                    <li>
                        <NavLink to="/todo-list">Todo List</NavLink>
                    </li>
                    <li>
                        <NavLink to="/user-list">User List</NavLink>
                    </li>
                </ul>
            </nav>
        </React.Fragment>
    )
}

export default Navbar;