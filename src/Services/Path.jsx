import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {HomePage} from "../Pages/Home/HomePage";


function BackG() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to={"/home"} replace/>}/>
            <Route path="/home" element={<HomePage/>}/>
        </Routes>
    );
}

export {BackG}