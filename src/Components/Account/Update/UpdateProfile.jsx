import React, {useState} from 'react';
import {CheckBox} from "../../CheckBox/CheckBox";
import './UpdateProfile.css';
import {LoginContext} from "../../../Contexts/LoginContext";

function UpdateProfile({user}) {

    const [updateEmail, setUpdateEmail] = useState('');
    const [updatePwd, setUpdatePwd] = useState('');
    const [updateAddress, setUpdateAddress] = useState('');
    const [updatePhone, setUpdatePhone] = useState('');
    const [isEmailChecked, setIsEmailChecked] = useState(false);
    const [isPwdChecked, setIsPwdChecked] = useState(false);
    const [isPhoneChecked, setIsPhoneChecked] = useState(false);
    const [isAddressChecked, setIsAddressChecked] = useState(false);
    const {userLogged} = React.useContext(LoginContext);


    function handleClickUpdate() {

        if (isEmailChecked) userLogged.email = updateEmail;
        if (isPwdChecked) userLogged.password = updatePwd;
        if (isPhoneChecked) userLogged.phone = updatePhone;
        if (isAddressChecked) userLogged.address = updateAddress;

        fetch('http://localhost:8080/api/client/updateClient', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userLogged),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Actualización exitosa', data);
                alert('Datos actualizados correctamente');
            })
            .catch(error => {
                console.error('Error en la actualización:', error);
            });
    }

    return (
        <div className="form-container4">
            <style>
                @import
                url('https://fonts.googleapis.com/css2?family=Abel&family=Bigshot+One&display=swap');
            </style>
            <div className="form-left4">
                <div className="form-section4">
                    <h3 className="descriptionUpdate4">Select the checkpoints of the information you want to change</h3>
                    <h2>User Information</h2>
                    <div className="userInfoUpdate4">
                        <div className="columnUserInfo4">
                            <div className="input-group4">
                                <div className="label-Group4">
                                    <CheckBox checked={isEmailChecked} onChange={setIsEmailChecked}/>
                                    <label>Email:</label>
                                </div>
                                <input
                                    type="text"
                                    placeholder={user.email}
                                    value={updateEmail}
                                    onChange={(e) => setUpdateEmail(e.target.value)}
                                    disabled={!isEmailChecked}
                                    className="inputChange4"
                                />
                            </div>
                            <div className="input-group4">
                                <label>Confirm Email:</label>
                                <input
                                    type="text"
                                    placeholder={user.email}
                                    value={updateEmail}
                                    onChange={(e) => setUpdateEmail(e.target.value)}
                                    disabled={!isEmailChecked}
                                    className="inputChange4"
                                />
                            </div>
                        </div>
                        <div className="columnUserInfo4">
                            <div className="input-group4">
                                <div className="label-Group4">
                                    <CheckBox checked={isPwdChecked} onChange={setIsPwdChecked}/>
                                    <label>New Password:</label>
                                </div>
                                <input
                                    type="text"
                                    placeholder="**********"
                                    value={updatePwd}
                                    onChange={(e) => setUpdatePwd(e.target.value)}
                                    disabled={!isPwdChecked}
                                    className="inputChange4"
                                />
                            </div>
                            <div className="input-group4">
                                <label>Confirm Password:</label>
                                <input
                                    type="text"
                                    placeholder="**********"
                                    value={updatePwd}
                                    onChange={(e) => setUpdatePwd(e.target.value)}
                                    disabled={!isPwdChecked}
                                    className="inputChange4"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-section4">
                    <h2>Personal Information</h2>
                    <div className="input-row4">
                        <div className="input-group14">
                            <div className="inputsG14">
                                <CheckBox checked={isPhoneChecked} onChange={setIsPhoneChecked}/>
                                <label className="name-p4">Phone Number:</label>
                            </div>
                            <input
                                type="text"
                                placeholder={user.phone}
                                value={updatePhone}
                                onChange={(e) => setUpdatePhone(e.target.value)}
                                disabled={!isPhoneChecked}
                                className="inputChange4"
                            />
                        </div>
                        <div className="input-group24">
                            <div className="inputsG24">
                                <CheckBox checked={isAddressChecked} onChange={setIsAddressChecked}/>
                                <label className="id-p4">Address:</label>
                            </div>
                            <input
                                type="text"
                                placeholder={user.address}
                                value={updateAddress}
                                onChange={(e) => setUpdateAddress(e.target.value)}
                                disabled={!isAddressChecked}
                                className="inputChange4"
                            />

                        </div>
                    </div>
                </div>
                <div className="buttonUpContainer">
                    <button className="buttonUpdate4" onClick={handleClickUpdate}>Update</button>
                </div>
            </div>

            <div className="image-section4">
                <div className="image-placeholder4">
                    <div>
                        <img src={user.srcImg} alt={user.name} className="Profile-image4"/>
                    </div>
                </div>
            </div>

        </div>
    );
}

export {UpdateProfile};