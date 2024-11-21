import React, {useContext, useState} from 'react';
import './BaseDataLogin.css';
import {LoginContext} from "../../../Contexts/LoginContext";
import Alert from '@mui/material/Alert';
import {useNavigate} from "react-router-dom";


import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
function BaseDataLogin() {

    const {userLogged, setUserLogged, setIsLoged, setIsAdmin, isAdmin} = useContext(LoginContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isOk, setIsOk] = useState(false);
    const [message, setMessage] = useState('');

    const navigate = useNavigate();


    function handleSubmit(e) {
        e.preventDefault(); // Evita que el formulario se envíe por defecto

        // Crear el objeto con las credenciales del usuario
        const loginDto = {
            email: email,
            password: password
        };

        fetch('http://localhost:8080/api/client/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Tipo de contenido
            },
            body: JSON.stringify(loginDto) // Convertir el objeto a JSON
        })
            .then(response => {
                if (response.ok) {
                    return response.json(); // Si la respuesta es exitosa, obtenemos el cliente
                } else if (response.status === 401) {
                    alert("Credenciales incorrectas");
                    throw new Error('Credenciales incorrectas');
                } else {

                    throw new Error('Error desconocido');
                }
            })
            .then(data => {
                setUserLogged(data);
                setIsLoged(true);
                console.log(data);
                if(data.id === '100'){
                    setIsAdmin(true);
                    console.log("es admin")
                }else {
                    setIsAdmin(false);
                    console.log("no es admin")
                }
                setSuccessMessage('Login exitoso');
                setIsOk(true);
                setErrorMessage('');
                setEmail('');
                setPassword('');
                setTimeout(() => {
                    navigate('/home'); // Redirigir al usuario a /home
                }, 1000);
            })
        .catch(error => {
            console.error("Error en la solicitud:", error);
            setMessage(error.message); // "Credenciales incorrectas" o "Error al intentar iniciar sesión"
        });
}

    const handleSuccess = (credentialResponse) => {
        console.log("Google Credential Response:", credentialResponse);

        // Enviar token al backend
        fetch("http://localhost:8080/api/outh/google", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ tokenId: credentialResponse.credential }),
        })
            .then((res) => {
                if (res.ok) {
                    console.log("Usuario autenticado");
                    navigate("/home");
                } else {
                    console.error("Error de autenticación");
                }
            })
            .catch((error) => console.error("Error:", error));
    };

    function handleNavigateToRegister() {
        navigate('/registerUser'); // Redirigimos a /registerUser
    }
        const handleError = () => {
            console.error("Error al iniciar sesión con Google");
        };

    return (
            <div className="BackgroundB2Log">
                <div className="BackgroundB21Log">
                    <body className="bodyLogin">

                        <h2 className="titlePage3Log">
                                <style>
                                    @import url('https://fonts.googleapis.com/css2?family=Bigshot+One&display=swap');
                                </style>
                                Login to your account
                            </h2>
                        <div className="inputRegisterBoxLog">
                            <style>
                                @import
                                url('https://fonts.googleapis.com/css2?family=Abel&family=Bigshot+One&display=swap');
                            </style>
                            <div className="registerBoxLog">
                                <label className="emailLog">Email</label>
                                <input
                                    type="text"
                                    required="required"
                                    value={email}
                                    placeholder="Tiqueteo@gmail.com"
                                    onChange={(e) => setEmail(e.target.value)}
                                    />
                            </div>
                            <div className="registerBoxLog">
                                <div className="label-and-link">
                                    <label className="passwordLog">Password</label>
                                    <a href="https://www.google.com" className="haveAnAccount">Forgot?</a>
                                </div>
                                <input
                                    type="text"
                                    required="required"
                                    value={password}
                                    placeholder={"********"}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button className="ButtonLog" onClick={handleSubmit}>
                                <style>
                                    @import url('https://fonts.googleapis.com/css2?family=Bigshot+One&display=swap');
                                </style>
                                Login now
                            </button>
                            {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
                            {isOk && <Alert severity="success">{successMessage}</Alert>}
                            <div>
                                <GoogleOAuthProvider clientId="633937686926-kop9phc0tug4usplr1inlidd45tdrjng.apps.googleusercontent.com">
                                    <div>
                                        <GoogleLogin
                                            onSuccess={handleSuccess}
                                            onError={handleError}
                                            classname="googleButton"
                                        />
                                    </div>
                                </GoogleOAuthProvider>
                            </div>
                            <button
                                className="dontHaveAnAccount"
                                onClick={handleNavigateToRegister} // Redirige a /registerUser
                            >
                                Don’t have an account? Sign up
                            </button>
                        </div>
                    </body>
                </div>
            </div>
    );
}

export {BaseDataLogin};