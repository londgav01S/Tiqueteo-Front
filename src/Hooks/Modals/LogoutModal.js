import React from 'react';
import ReactDOM from 'react-dom';
import {Logout} from "../../Components/Log/Logout/Logout";
import "./LogoutModal.css";

const ModalOverlay=(props) => {
    return <div className="ModalBackground">{props.children}</div>
}

const modalElement = document.getElementById("modalLog");

function LogoutModal(props) {

    return ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        modalElement
    );
}
export {LogoutModal};