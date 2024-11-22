import React, {useState} from "react";
import './BaseRp.css';
import {ModalContext} from "../../../Contexts/ModalContext";
import {LogoutModal} from "../../../Hooks/Modals/LogoutModal";
import {Logout} from "../Logout/Logout";
import {EnterCode} from "../../Code/EnterCode";
import {LoginContext} from "../../../Contexts/LoginContext";


function DataRecoverPassword() {

    const {email, setEmail} = React.useContext(LoginContext);
    const [message, setMessage] = useState("");
    const {setOpenCode,openCode} = React.useContext(ModalContext);

    function handleSubmit(e) {
        e.preventDefault();

        fetch("http://localhost:8080/api/recovery-code", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
        })
            .then((response) => {
                if (response.ok) {
                    setMessage("El código de recuperación ha sido enviado a tu correo.");
                    setOpenCode(true);
                    alert("El código de recuperación ha sido enviado a tu correo.");
                } else {
                    return response.json().then((errorData) => {
                        setMessage(errorData.message || "Error al solicitar el código de recuperación.");
                        alert(message)
                    });
                }
            })
            .catch((error) => {
                console.error("Error en la solicitud:", error);
                setMessage("Hubo un problema al procesar la solicitud.");
            });
    }

    return (
        <div className="BackgroundB2Rp">
            <div className="BackgroundB21Rp">
                <body className="bodyRp">
                <h2 className="titlePage3Rp">
                    <style>
                        @import url('https://fonts.googleapis.com/css2?family=Bigshot+One&display=swap');
                    </style>
                    Enter the registered <br/> email
                </h2>
                <div className="inputMailRp">
                    <style>
                        @import
                        url('https://fonts.googleapis.com/css2?family=Abel&family=Bigshot+One&display=swap');
                    </style>
                    <div className="registerBoxRp">
                        <label className="emailRp">Email</label>
                        <input
                            type="text"
                            required="required"
                            value={email}
                            placeholder="Tiqueteo@gmail.com"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button className="ButtonRp" onClick={handleSubmit}>
                        <style>
                            @import url('https://fonts.googleapis.com/css2?family=Bigshot+One&display=swap');
                        </style>
                        Send Code
                    </button>
                    {openCode && (
                        <LogoutModal>
                            <EnterCode/>
                        </LogoutModal>
                    )}
                </div>
                </body>

            </div>
        </div>
    );

}

export {DataRecoverPassword};