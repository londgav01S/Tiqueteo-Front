import React, {useContext} from "react";
import './HeadBar.css';
import {IoArrowForwardOutline} from "react-icons/io5";
import {Link} from "react-router-dom";
import {LoginContext} from "../../../Contexts/LoginContext";

function HeadBar() {

    const {isLoged, setIsLoged} = useContext(LoginContext)

    return (
        <div className="head-bar">
            <h1 className="head-bar-name">
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Bigshot+One&display=swap');
                </style>
                TIQUETEO
            </h1>

            <nav className="head-bar-options">
                <Link to="/home" className="head-bar-option">Home</Link>
                {isLoged ? (
                    <Link to="/account" className="head-bar-option1">
                        Account
                        <div className="head-bar-loglog">
                            <IoArrowForwardOutline/>
                        </div>
                    </Link>
                ) : (
                    <Link to="/login" className="head-bar-option1">
                        Login
                        <div className="head-bar-loglog">
                            <IoArrowForwardOutline/>
                        </div>
                    </Link>
                )}
            </nav>
        </div>
    )
}

//TODO; change the link to the login page in head-bar-options
export {HeadBar};