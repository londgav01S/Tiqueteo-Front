import React from 'react';
import './AccountOp.css';
import { Link } from 'react-router-dom';
import {ModalContext} from "../../../Contexts/ModalContext";
import {LogoutModal} from "../../../Hooks/Modals/LogoutModal";
import {Logout} from "../../Log/Logout/Logout";

function AccountOp(){

    const {setOpenLogout, openLogout} = React.useContext(ModalContext);

    return(
        <div className="AccountOpBg">
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Bigshot+One&display=swap');
            </style>
            <h3 className="Title-Aop">MY <br/> ACCOUNT</h3>
            <div className="AccountOp">
                <div className="Separator"/>
                <h4>ACCOUNT <br/> SETTINGS</h4>
                <nav className="AccountOp">
                    <Link to="/account/my-profile" className="AccountOpOption">My Profile</Link>
                    <Link to="/account/my-update" className="AccountOpOption">My Update</Link>
                    <div className="Separator"/>
                    <h4>MY TICKETS</h4>
                    <Link to="/account/stadistics" className="AccountOpOption">My Tickets</Link>
                    <Link to="/account/my-coupons" className="AccountOpOption">My Shopping <br/> history</Link>
                    <div className="Separator"/>
                    <Link to="/account/manage-coupons" className="AccountOpOption">Buy</Link>
                </nav>
                <div>
                    <button className="BtnAccountOpOption" onClick={() => setOpenLogout(true)}>Log Out</button>
                    {openLogout && (
                        <LogoutModal>
                            <Logout/>
                        </LogoutModal>
                    )}
                </div>
            </div>
        </div>
    )
}

export {AccountOp};