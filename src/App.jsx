import './styles/join.css';
import './styles/chat.css';
import './styles/infobar.css';
import './styles/input.css';
import './styles/message.css';
import './styles/messages.css';
import './styles/textcontainer.css';

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Join from './components/Join';
import Chat from './components/Chat';

const App = () => {
    return (
        <Router>
            <Route exact path="/" component={Join} />
            <Route exact path="/chat" component={Chat} />
        </Router>
    );
};

export default App;
