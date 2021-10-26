import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';
import ScrollToBottom from 'react-scroll-to-bottom';
import moment from 'moment';

const Messages = ({ messages, name }) => {
    console.log('from messages: ', messages, name);
    const date = moment().format('ddd Do Y');
    return (
        <ScrollToBottom classname="messages">
            <div className="text-center">{date}</div>
            {messages.map((message, index) => {
                console.log('from messages: ', message, name);
                console.log('from messages: ', typeof name, typeof message);
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
