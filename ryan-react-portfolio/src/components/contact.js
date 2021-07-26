// form
import React, { useState } from 'react'

import { checkEmail } from '../utils/helper';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const inputChangeHandler = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        if (inputName === 'name') {
            setName(inputValue);
        } else if (inputName === 'email') {
            setEmail(inputValue); 
        } else if (inputName === 'message') {
            setMessage(inputValue)
        }
    };
    const formSubmit = (event) => {
        event.preventDefault();
        if (!name || !email || !message ) {
            setError('Missing Information')
            return
        }
        if (!checkEmail(email)) {
            setError('Incorrect Email');
            return 
        }
        setName('');
        setEmail('');
        setMessage('');
    }
    return(
        <div>
            <h2>Contact</h2>
            <section>

            <form className="form">
                <input
                value={name}
                name="name"
                onChange={inputChangeHandler}
                type="text"
                placeholder="Name"
                />
                <input
                value={email}
                name="email"
                onChange={inputChangeHandler}
                type="text"
                placeholder="Email"
                />
                <textarea
                value={message}
                name="message"
                onChange={inputChangeHandler}
                type="text"
                placeholder="Message"
                />
                <button type="button" onClick={formSubmit}>
                Submit
                </button>
            </form>
            {error && (
                <div>
                    <p className="error-text">{error}</p>
                </div>
            )}
            </section>
        </div>
    )
}

export default Contact;