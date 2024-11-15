import React from "react";
import './HeadBar.css';
import {IoArrowForwardOutline} from "react-icons/io5";

function HeadBar() {
    return (
        <div className="head-bar">
            <h1 className="head-bar-name">
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Bigshot+One&display=swap');
                </style>
                TIQUETEO
            </h1>
            <div className="head-bar-options">
                <a href="https://www.google.com" className="head-bar-option">Home</a>
                <a href="https://www.google.com" className="head-bar-option">Events</a>
                <a href="https://www.google.com" className="head-bar-option">About</a>
                <a href="https://www.google.com" className="head-bar-option">Contact</a>
                <a href="https://www.google.com" className="head-bar-option1">
                    Login
                    <div className="head-bar-loglog">
                        <IoArrowForwardOutline />
                    </div>

                </a>
            </div>
        </div>
    )
}

//TODO; change the link to the login page in head-bar-options
export {HeadBar};