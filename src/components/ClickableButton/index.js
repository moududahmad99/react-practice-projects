import React, { useState } from 'react'

const ClickableButton = () => {

    const [clicked, setClicked] = useState(false)

    const handleOnClick = () => {
        setClicked(true)
    }

    return (
        <div>
            <button onClick={handleOnClick}>
                {
                    clicked ? 'You clicked me' : 'Click me!'
                }
            </button>
        </div>
    )
}

export default ClickableButton