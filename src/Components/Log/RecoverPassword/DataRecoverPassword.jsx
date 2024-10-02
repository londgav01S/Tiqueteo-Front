import React, {useState} from "react";
import './BaseRp.css';


function DataRecoverPassword() {

    const [email, setEmail] = useState('');

    function handleSubmit() {

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
                </div>
                </body>
            </div>
        </div>
    );

}

export {DataRecoverPassword};