import React, { useState } from 'react'
import './style.css'

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
        <div className='count-container'>
            <h1 className='counter-title'>Counter</h1>
            <p className='count'>{count}</p>
            <button className="count-button" onClick={handleIncrement}>Increment</button>
            <button className="count-button" onClick={handleDecrement}>Decrement</button>
            <button className="count-button" onClick={handleDefault}>Default</button>
        </div>
    )
}

export default Counter;