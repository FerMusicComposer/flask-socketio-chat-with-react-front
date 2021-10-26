import React from 'react';
import PropTypes from 'prop-types';
import closeIcon from '../styles/icons/closeIcon.png';
import onlineIcon from '../styles/icons/onlineIcon.png';

const InfoBar = ({ room }) => {
    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img className="onlineIcon" src={onlineIcon} alt="online" />
                <h3>{room}</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/">
                    <img src={closeIcon} alt="close" />
                </a>
            </div>
        </div>
    );
};
InfoBar.propTypes = {
    room: PropTypes.string,
};
export default InfoBar;
