import React, {useRef, useState} from "react";
import './indexCode.css';
import {FcGoogle} from "react-icons/fc";

function DataNewPassword() {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    function handleSubmit() {

    }

    return (
        <div className="BackgroundB2Np">
            <div className="BackgroundB21Np">
                <body className="bodyNp">

                <h2 className="titlePage3Np">
                    <style>
                        @import url('https://fonts.googleapis.com/css2?family=Bigshot+One&display=swap');
                    </style>
                    Login to your account
                </h2>
                <div className="inputRegisterBoxNp">
                    <div className="registerBoxNp">
                        <div className="label-and-link">
                            <label className="passwordNp">New Password</label>
                        </div>
                        <input
                            type="text"
                            required="required"
                            value={newPassword}
                            placeholder={"********"}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                    </div>
                    <div className="registerBoxNp">
                        <div className="label-and-link">
                            <label className="passwordNp">Verify password</label>
                        </div>
                        <input
                            type="text"
                            required="required"
                            value={confirmPassword}
                            placeholder={"********"}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <button className="ButtonLog" onClick={handleSubmit}>
                        <style>
                            @import url('https://fonts.googleapis.com/css2?family=Bigshot+One&display=swap');
                        </style>
                        Submit
                    </button>
                </div>
                </body>
            </div>
        </div>
    );

}

export {DataNewPassword};