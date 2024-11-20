import {AccountOp} from "../../Components/Account/AccountOptions/AccountOp";
import React, {useContext} from "react";
import './MyAccount.css';
import {Profile} from "./AccountDirectories/Profile";
import {LoginContext} from "../../Contexts/LoginContext";
import {Update} from "./AccountDirectories/Update";
import {AdminOptions} from "../../Components/Account/ADMIN/Options/AdminOptions";
import {ManageCoupons} from "../../Components/Account/ADMIN/Coupons/ManageCoupons";
import {Coupons} from "./Admin/Coupons";
import {Stadistics} from "./Admin/Stadistics";
import {Routes, Route} from "react-router-dom";
import {Events} from "./Admin/Events";

function MyAccount() {

    let {userLogged, isAdmin}= useContext(LoginContext);
    let user = userLogged;

    return (
        <div className="MyAccount">
            <div className="Account-Container">
                {isAdmin ? <AdminOptions /> : <AccountOp />}
                <main className="main-Account">
                    <Routes>
                        <Route path="my-profile" element={<Profile user={user}/>} />
                        <Route path="my-update" element={<Update user={user}/>} />
                        {isAdmin && (
                            <React.Fragment>
                                <Route path="stadistics" element={<Stadistics />} />
                                <Route path="my-coupons" element={<Coupons />} />
                                <Route path="events" element={<Events />} />
                            </React.Fragment>
                        )}
                    </Routes>
                </main>
            </div>
        </div>
    )
}

export {MyAccount};