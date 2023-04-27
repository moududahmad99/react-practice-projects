import React, { useState } from 'react'

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
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => {
                        setPassword(e.target.value)
                    }} />
                    <button type='submit'>Submit Info</button>
                </div>
            </form>
        </React.Fragment>
    )
}

export default LoginForm;