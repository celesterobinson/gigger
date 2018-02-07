import React from 'react'
import "../styles/Header.css";

function Header(props) {
    return (
        <div className="header">
            <div className="titles">
                <div className="title">
                    <h1>GIGGER</h1>
                </div>
                <div className="sub-title">
                    <h4>The Musician's Calendar</h4>
                </div>
            </div>
            <div className="add-event-button">
                <h1>+</h1>
            </div>
        </div>
    )
}

export default Header;
