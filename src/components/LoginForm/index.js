import React, { useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { SiGooglehome } from 'react-icons/si'


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
                        <input className='login-input' type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='form-inner'>
                        <label>Email: </label>
                        <input className='login-input' type="email" value={email} onChange={(e) => {
                            setEmail(e.target.value)
                        }} />
                    </div>
                    <div className='form-inner'>
                        <label>Password:</label>
                        <input className='login-input' type="password" value={password} onChange={(e) => {
                            setPassword(e.target.value)
                        }} />
                    </div>
                    <button type='submit' className='login-button'>Submit Info</button>
                </div>
                {/* Home Button */}
                <Link to='/' className='goBack'> <SiGooglehome /></Link>
            </form>
        </React.Fragment>
    )
}

export default LoginForm;