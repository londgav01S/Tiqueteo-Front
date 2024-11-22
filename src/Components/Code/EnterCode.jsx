import React, {useRef, useState} from "react";
import './indexCode.css';
import {LoginContext} from "../../Contexts/LoginContext";
import {useNavigate} from "react-router-dom";

function EnterCode() {
    const [code, setCode] = useState(['', '', '', '']);
    const inputRefs = [useRef(), useRef(), useRef(), useRef()];
    const {email} = React.useContext(LoginContext);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleChange = (index, value) => {
        if (value.length <= 1) {
            const newCode = [...code];
            newCode[index] = value;
            setCode(newCode);

            if (value && index < 3) {
                inputRefs[index + 1].current.focus();
            }
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !code[index] && index > 0) {
            inputRefs[index - 1].current.focus();
        }
    };

    function handleSubmitedCode(e) {
        e.preventDefault();
        const codeValue = code.join('');
        console.log(codeValue);


        fetch("http://localhost:8080/api/validate-code", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, code: codeValue }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.valid) {
                    setMessage("El código de recuperación es válido.");
                    alert("El código de recuperación es válido.");
                    navigate("/newPwd");
                } else {
                    setMessage("El código de recuperación no es válido.");
                }
            })
            .catch((error) => {
                console.error("Error en la solicitud:", error);
                setMessage("Hubo un problema al validar el código.");
            });
    }

    return (
        <div className="codeCard">
            <div className="code-entry-container">
                <style>
                    @import
                    url('https://fonts.googleapis.com/css2?family=Abel&family=Bigshot+One&display=swap');
                </style>
                <h1>Enter the code</h1>

                <div className="input-container">
                    {code.map((digit, index) => (
                        <div key={index} className="input-wrapper">
                            <input
                                ref={inputRefs[index]}
                                type="text"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                            />
                        </div>
                    ))}
                </div>

                <button onClick={handleSubmitedCode}>
                    Submit
                </button>
            </div>
        </div>
    );

}

export {EnterCode};