import React, { useState } from 'react'
import './style.css'

function LoginForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()

        if (name && email && password) {
            alert(`Your Name is ${name}. Your Email: ${email}. and Password ${password}`)
        } else {
            alert('All Input Must be Filled')
        }
    }

    return (
        <React.Fragment>
            <form className='form' onSubmit={handleSubmit}>
                <div className='form-wrapper'>
                        <div className='form-inner'>
                            <label>Name:</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className='form-inner'>
                            <label>Email: </label>
                            <input type="email" value={email} onChange={(e) => {
                                setEmail(e.target.value)
                            }} />
                        </div>
                        <div className='form-inner'>
                            <label>Password:</label>
                            <input type="password" value={password} onChange={(e) => {
                                setPassword(e.target.value)
                            }} />
                        </div>
                        <button type='submit' className='button'>Submit Info</button>
                    </div>
            </form>
        </React.Fragment>
    )
}

export default LoginForm;