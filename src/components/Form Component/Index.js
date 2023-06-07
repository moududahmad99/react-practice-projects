import React, { useState } from 'react';
import './style.css';

function FormExtension() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (username === 'admin' && password === 'password') {
            setErrorMessage('Login Successful');
        } else {
            setErrorMessage('Incorrect username or password');
        }
    };

    return (
        <div className="login-form-container">
            <h2 className="login-form-heading">Login Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username" className="login-form-label">Username:</label>
                    <input type="text" id="username" value={username} onChange={handleUsernameChange} className="login-form-input" />
                </div>
                <div>
                    <label htmlFor="password" className="login-form-label">Password:</label>
                    <input type="password" id="password" value={password} onChange={handlePasswordChange} className="login-form-input" />
                </div>
                <button type="submit" className="login-form-button">Login</button>
            </form>
            {errorMessage && <p className="login-form-error">{errorMessage}</p>}
        </div>
    );
}

export default FormExtension;