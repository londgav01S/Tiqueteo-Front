import React, {useRef, useState} from "react";
import './indexCode.css';

function EnterCode() {
    const [code, setCode] = useState(['', '', '', '']);
    const inputRefs = [useRef(), useRef(), useRef(), useRef()];

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

                <button onClick={() => console.log('Submitted code:', code.join(''))}>
                    Submit
                </button>
            </div>
        </div>
    );

}

export {EnterCode};