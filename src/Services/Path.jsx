import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {HomePage} from "../Pages/Home/HomePage";
import {MyAccount} from "../Pages/Account/MyAccount";
import {Login} from "../Pages/Login/Login";
import {RecoverPassword} from "../Pages/RecoverPassword/RecoverPassword";
import {RegisterUser} from "../Pages/RegisterUser/RegisterUser";
import {EventInfo} from "../Pages/Shopp/EventInfo";
import {DataNewPassword} from "../Components/NewPassword/DataNewPassword";
import {NewPawd} from "../Pages/NewPwd/NewPawd";


function BackG() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to={"/home"} replace/>}/>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/account/*" element={<MyAccount/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/recoverPassword" element={<RecoverPassword/>}/>
            <Route path="/registerUser" element={<RegisterUser/>}/>
            <Route path="/buy" element={<EventInfo/>}/>
            <Route path="/newPwd" element={<NewPawd/>}/>
        </Routes>
    );
}

export {BackG}