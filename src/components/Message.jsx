import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const Message = ({ message, name }) => {
    console.log('from inside message: message: ', message);
    console.log('from inside message: ', message.msg, message.name, message.time);
    const msg = message.msg;
    const msgName = message.name;
    const time = moment().format('h:mm');

    let isSentByCurrentUser = false;
    const trimmedName = name.trim().toLowerCase();

    if (msgName === trimmedName) {
        isSentByCurrentUser = true;
    }

    return isSentByCurrentUser ? (
        <div className="messageContainer justifyEnd">
            <p className="sentText pr-10">{msgName}</p>
            <div className="messageBox backgroundBlue">
                <p className="messageText colorWhite">{msg}</p>
                <p className="colorWhite">{time}</p>
            </div>
        </div>
    ) : (
        <div className="messageContainer justifyStart">
            <div className="messageBox backgroundLight">
                <p className="messageText colorDark">{msg}</p>
                <p className="colorDark">{time}</p>
            </div>
            <p className="sentText pl-10">{msgName}</p>
        </div>
    );
};

Message.propTypes = {
    message: PropTypes.object,
    name: PropTypes.string,
};
export default Message;
