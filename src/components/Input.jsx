import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ message, setMessage, sendMessage }) => {
    return (
        <form className="form">
            <input
                className="input"
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={event => setMessage(event.target.value)}
                onKeyDown={event => (event.key === 'Enter' ? sendMessage(event) : null)}
            />
            <button className="sendButton" onClick={event => sendMessage(event)}>
                Send
            </button>
        </form>
    );
};

Input.propTypes = {
    message: PropTypes.string,
    setMessage: PropTypes.func,
    sendMessage: PropTypes.func,
};
export default Input;
