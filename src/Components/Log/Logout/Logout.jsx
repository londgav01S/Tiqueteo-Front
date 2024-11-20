import {IoCheckmark, IoClose} from "react-icons/io5";
import React from "react";
import './Logout.css';
import {ModalContext} from "../../../Contexts/ModalContext";
import {LoginContext} from "../../../Contexts/LoginContext";
import {useNavigate} from "react-router-dom";


function Logout() {

    const {setOpenLogout} = React.useContext(ModalContext);
    const {setUserLogged, setIsLoged} = React.useContext(LoginContext);
    const navigate = useNavigate();

    function handleLongout() {
        setUserLogged(null);
        setIsLoged(false);
        setOpenLogout(false);
        navigate("/");
    }

    return (
        <div className="closeContainer">
            <div className="close">
                <h1 className="descriptionClose">
                    <style>
                        @import url('https://fonts.googleapis.com/css2?family=Bigshot+One&display=swap');
                    </style>
                    are you sure<br/>
                    you want to<br/>
                    close<br/>
                    session?
                </h1>
                <div className="buttonC-container">
                    <style>
                        @import
                        url('https://fonts.googleapis.com/css2?family=Abel&family=Bigshot+One&display=swap');
                    </style>
                    <div className={"yesContainer"} onClick={handleLongout}>
                        <button className="button-yes">
                            <IoCheckmark color={"green"} size={50}/>
                        </button>
                        <h2 className="yes">YES</h2>
                    </div>

                    <div className={"noContainer"}>
                        <button className="button-no" onClick={() => setOpenLogout(false)}>
                            <IoClose color={"red"} size={50}/>
                        </button>
                        <h2 className="no">NO</h2>
                    </div>
                </div>
            </div>
        </div>
    )

}

export {Logout};