import React from 'react';
import './AdminOptions.css';
import { Link } from 'react-router-dom';
import {ModalContext} from "../../../../Contexts/ModalContext";
import {LogoutModal} from "../../../../Hooks/Modals/LogoutModal";
import {Logout} from "../../../Log/Logout/Logout";

function AdminOptions(){

    const {setOpenLogout, openLogout} = React.useContext(ModalContext);
    return(
        <div className="AccountOpAdmin">
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Bigshot+One&display=swap');
            </style>
            <h3 className="Title-AopAdmin">MY <br/> ACCOUNT</h3>
            <div className="AccountOp_Admin">
                <div className="SeparatorAdmin"/>
                <h4>ACCOUNT <br/> SETTINGS</h4>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Bigshot+One&display=swap');
                </style>
                <nav className="AccountOp">
                    <Link to={"/account/my-profile"} className="AccountOpOptionAdmin">My Profile</Link>
                    <Link to={"/account/my-update"} className="AccountOpOptionAdmin">Update</Link>
                    <div className="SeparatorAdmin"/>
                    <h4>COUPONS</h4>
                    <Link to={"/account/my-coupons"} className="AccountOpOptionAdmin">Manage <br/>Coupons</Link>
                    <div className="SeparatorAdmin"/>
                    <h4>STADISTICS</h4>
                    <Link to={"/account/stadistics"} className="AccountOpOptionAdmin">Management <br/>of Reports</Link>
                    <div className="SeparatorAdmin"/>
                    <h4>EVENTS</h4>
                    <Link to={"/account/events"} className="AccountOpOptionAdmin">Management <br/>of Events</Link>
                    <div className="SeparatorAdmin"/>
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

export {AdminOptions};