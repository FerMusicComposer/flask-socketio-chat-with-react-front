import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';
import ScrollToBottom from 'react-scroll-to-bottom';

const Messages = ({ messages, name }) => {
    return (
        <ScrollToBottom classname="messages">
            {messages.map((message, index) => {
                return (
                    <div key={index}>
                        <Message message={message} name={name} />
                    </div>
                );
            })}
        </ScrollToBottom>
    );
};

Messages.propTypes = {
    messages: PropTypes.array,
    name: PropTypes.string,
};
export default Messages;
