import React, { useState, useEffect } from 'react';
import InfoBar from './InfoBar';
import Input from './Input';
import Messages from './Messages';
import queryString from 'query-string';
import io from 'socket.io-client';

// Tutorial mentions this variable must be outside of the component
let socket;

const Chat = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPONT = 'localhost:5000';

    // This useEffect handles connection and disconnection of users
    useEffect(() => {
        const { name, room } = queryString.parse(window.location.search);

        socket = io(ENDPONT);

        setName(name);
        setRoom(room);

        // This method passes an action and data to the backend. On 'join' it passes both
        //name and room to the server. The 3rd parameter is a callback comming from the
        //server which is usually used for error handling
        socket.emit('join', { name, room }, () => {});

        // The cleanup function of this useEffect, returns a function that emits the 'disconnect'
        // event defined on the backend, and also turns the socket off.
        return () => {
            socket.emit('disconnect', { name });

            socket.off();
        };
    }, [ENDPONT, window.location.search]);

    // This useEffect handles the pushing of messages into a messages array
    useEffect(() => {
        socket.on('message', message => {
            setMessages([...messages, message]);
        });
    }, [messages]);

    // This function sends messages. It refers to the sendMessage method on the backend and
    // the callback on the 3rd argument, clears the message input
    const sendMessage = event => {
        event.preventDefault();

        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    };

    console.log(message, messages, room);

    return (
        <div className="outterContainer">
            <div className="container">
                <InfoBar room={room} />
                <Messages messages={messages} name={name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
        </div>
    );
};

export default Chat;
