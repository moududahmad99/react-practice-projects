import React, { useState, useEffect } from 'react';
import 'firebase/database';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { Link } from 'react-router-dom'
import { SiGooglehome } from 'react-icons/si'
import './style.css'

const firebaseConfig = {
    apiKey: "AIzaSyArVBxw_yKzMqaFwSRZeqeSMQebqs6bcsw",
    authDomain: "chatting-app-b6875.firebaseapp.com",
    databaseURL: "https://chatting-app-b6875-default-rtdb.firebaseio.com",
    projectId: "chatting-app-b6875",
    storageBucket: "chatting-app-b6875.appspot.com",
    messagingSenderId: "541254450442",
    appId: "1:541254450442:web:2d3f3616c6e537f9570ef3"
};


firebase.initializeApp(firebaseConfig);

const BasicChatApp = () => {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
    const [username, setUsername] = useState('');

    useEffect(() => {
        const messagesRef = firebase.database().ref('messages');
        messagesRef.on('value', (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const messageList = Object.values(data);
                setMessages(messageList);
            } else {
                setMessages([]);
            }
        });
    }, []);

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleSendMessage = (event) => {
        event.preventDefault();

        if (inputText.trim() !== '' && username.trim() !== '') {
            const newMessageRef = firebase.database().ref('messages').push();
            const newMessage = {
                id: newMessageRef.key,
                text: inputText,
                username: username,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
            };
            newMessageRef.set(newMessage);

            setInputText('');
        }
    };

    return (
        <div className="chat-container">
            <h2>Chat App</h2>
            <div className="message-container">
                {messages.map((message) => (
                    <div key={message.id}>
                        <strong>{message.username}:</strong> {message.text}
                    </div>
                ))}
            </div>
            <form onSubmit={handleSendMessage} className="message-form">
                <input
                    type="text"
                    placeholder="Your username"
                    value={username}
                    onChange={handleUsernameChange}
                />
                <input
                    type="text"
                    placeholder="Type a message"
                    value={inputText}
                    onChange={handleInputChange}
                />
                <button type="submit">Send</button>
            </form>
            {/* Home Button */}
            <Link to='/' className='goBack'> <SiGooglehome /></Link>
        </div>
    );
};

export default BasicChatApp;
