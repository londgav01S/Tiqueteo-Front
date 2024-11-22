import React, {useContext, useRef, useState} from "react";
import './index.css';
import {LoginContext} from "../../Contexts/LoginContext";

function DataNewPassword() {

    const {email} = useContext(LoginContext);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    function handleSubmit() {
        console.log(email);
        console.log(newPassword);
        if (newPassword === confirmPassword) {
            fetch("http://localhost:8080/api/new-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, newPassword }),
            })
                .then((response) => {
                    if (response.ok) {
                        alert("La contraseña ha sido actualizada correctamente.");
                    } else {
                        return response.json().then((errorData) => {
                            alert("Error al actualizar la contraseña.");
                        });
                    }
                })
                .catch((error) => {
                    console.error("Error en la solicitud:", error);
                    alert("Hubo un problema al procesar la solicitud.");
                });
        } else {
            alert("Las contraseñas no coinciden.");
        }
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
                    <button className="ButtonNp" onClick={handleSubmit}>
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