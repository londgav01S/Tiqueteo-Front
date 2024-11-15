import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {HomePage} from "../Pages/Home/HomePage";
import {MyAccount} from "../Pages/Account/MyAccount";
import {Login} from "../Pages/Login/Login";
import {RecoverPassword} from "../Pages/RecoverPassword/RecoverPassword";
import {RegisterUser} from "../Pages/RegisterUser/RegisterUser";
import {MyProfile} from "../Components/Account/Profile/MyProfile";
import {Profile} from "../Pages/Account/AccountDirectories/Profile";
import {Update} from "../Pages/Account/AccountDirectories/Update";


function BackG() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to={"/home"} replace/>}/>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/account/*" element={<MyAccount/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/recoverPassword" element={<RecoverPassword/>}/>
            <Route path="/registerUser" element={<RegisterUser/>}/>
        </Routes>
    );
}

export {BackG}