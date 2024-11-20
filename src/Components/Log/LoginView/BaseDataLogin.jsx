import React, {useContext, useState} from 'react';
import { FcGoogle } from "react-icons/fc";
import './BaseDataLogin.css';
import {LoginContext} from "../../../Contexts/LoginContext";
import Alert from '@mui/material/Alert';
import {useNavigate} from "react-router-dom";

function BaseDataLogin() {

    const {userLogged, setUserLogged, setIsLoged, setIsAdmin} = useContext(LoginContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isOk, setIsOk] = useState(false);

    const navigate = useNavigate();


    function handleSubmit(e) {
        e.preventDefault(); // Evita que el formulario se envíe por defecto

        // Crear el objeto con las credenciales del usuario
        const loginDto = {
            email: email,
            password: password
        };

        // Hacer la solicitud POST al backend
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
                    throw new Error('Credenciales incorrectas');
                } else {
                    throw new Error('Error desconocido');
                }
            })
            .then(data => {
                // Si el login es exitoso, se maneja el cliente aquí
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
                setErrorMessage(error.message); // Mostrar el mensaje de error
                setSuccessMessage(''); // Limpiar cualquier mensaje de éxito
            });
    }


    function handleSubmitGoogle() {
        console.log("login with google")
        const clientId = '633937686926-kop9phc0tug4usplr1inlidd45tdrjng.apps.googleusercontent.com'; // Reemplaza con tu client_id
        const redirectUri = 'http://localhost:8080/api/client/login'; // TODO: Asegúrate de que coincida con tu configuración
        const scope = 'openid profile email'; // Ajusta los scopes según sea necesario
        const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;

        window.location.href = authUrl;
    }

    function handleNavigateToRegister() {
        navigate('/registerUser'); // Redirigimos a /registerUser
    }

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
                            {errorMessage && <p className="error">{errorMessage}</p>}
                            {isOk && <Alert severity="success">Login was Successful</Alert>}
                            {successMessage && <p className="success">{successMessage}</p>}
                            <button className="continueGoogleLog" onClick={handleSubmitGoogle}>
                                <style>
                                    @import url('https://fonts.googleapis.com/css2?family=Bigshot+One&display=swap');
                                </style>
                                <FcGoogle size={20}/>
                                Continue with Google
                            </button>
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