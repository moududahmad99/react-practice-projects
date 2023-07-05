import React, { useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { SiGooglehome } from 'react-icons/si'

const Counter = () => {

    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDecrement = () => {
        setCount(count - 1)
    }

    const handleDefault = () => {
        setCount(0)
    }




    return (
        <React.Fragment>

            <div className='count-container'>
                <h1 className='counter-title'>Counter</h1>
                <p className='count'>{count}</p>
                <div>
                    <button className="count-button" onClick={handleIncrement}>Increment</button>
                    <button className="count-button" onClick={handleDecrement}>Decrement</button>
                    <button className="count-button" onClick={handleDefault}>Default</button>
                </div>
            </div>

            {/* Home Button */}
            <Link to='/' className='goBack'> <SiGooglehome /></Link>
        </React.Fragment>
    )
}

export default Counter;