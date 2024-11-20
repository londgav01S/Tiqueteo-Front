import {LoginContext} from "../../../Contexts/LoginContext";
import {useContext} from "react";
import './MyProfile.css';

function MyProfile({user}) {

    return (
        <div className="form-container3">
            <div className="form-left3">
                <div className="form-section3">
                    <style>
                        @import
                        url('https://fonts.googleapis.com/css2?family=Abel&family=Bigshot+One&display=swap');
                    </style>
                    <h2>User Information</h2>
                    <div className="input-group3">
                        <label>User:</label>
                        <input type="text" placeholder={user.name} className="name-user3"/>
                    </div>
                    <div className="input-group3">
                        <label>Email:</label>
                        <input type="email" placeholder={user.email} className="email-user3"/>
                    </div>
                </div>

                <div className="form-section3">
                    <h2>Personal Information</h2>
                    <div className="input-row23">
                        <div className="input-group13">
                            <label className="name-p3">Name:</label>
                            <input className="input-name-p3" type="text" placeholder={user.name}/>
                        </div>
                        <div className="input-group23">
                            <label className="id-p3">ID:</label>
                            <input type="text" placeholder={user.id}/>
                        </div>
                    </div>
                    <div className="input-group3">
                        <label>Phone Number:</label>
                        <input type="tel" placeholder={user.phone} className="input-tel3"/>
                    </div>
                </div>
            </div>

            <div className="image-section3">
                <div className="image-placeholder3">
                    <div>
                        <img src={user.srcImg} alt={user.name} className="Profile-image3"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export {MyProfile};