import React, {useState} from 'react';
import {CheckBox} from "../../CheckBox/CheckBox";
import './UpdateProfile.css';

function UpdateProfile({user}) {

    const [updateEmail, setUpdateEmail] = useState('');
    const [updateEmailConfirm, setUpdateEmailConfirm] = useState('');
    const [updatePwd, setUpdatePwd] = useState('');
    const [updatePwdConfirm, setUpdatePwdConfirm] = useState('');
    const [updateAddress, setUpdateAddress] = useState('');
    const [updatePhone, setUpdatePhone] = useState('');


    //TODO: Implementar funciones para conectar con el back
    //TODO: Implementar para que se sepa cuando el check este en chulito


    return (
        <div className="form-container4">
            <div className="form-left4">
                <div className="form-section4">
                    <style>
                        @import
                        url('https://fonts.googleapis.com/css2?family=Abel&family=Bigshot+One&display=swap');
                    </style>
                    <h3 className="descriptionUpdate4">Select the checkpoints of the information you want to change</h3>
                    <h2>User Information</h2>
                    <div className="userInfoUpdate4">
                        <div className="columnUserInfo4">
                            <div className="input-group4">
                                <div className="label-Group4">
                                    <CheckBox/>
                                    <label>Email:</label>
                                </div>
                                <input
                                    type="text"
                                    placeholder={user.email}
                                    required="required"
                                    value={updateEmail}
                                    onChange={(e) => setUpdateEmail(e.target.value)}
                                    className="inputChange4"/>
                            </div>
                            <div className="input-group4">
                                <label>Confirm Email:</label>
                                <input
                                    type="email"
                                    placeholder={user.email}
                                    required="required"
                                    value={updateEmailConfirm}
                                    onChange={(e) => setUpdateEmailConfirm(e.target.value)}
                                    className="inputChange4"/>
                            </div>
                        </div>
                        <div className="columnUserInfo4">
                            <div className="input-group4">
                                <div className="label-Group4">
                                    <CheckBox/>
                                    <label>New Password:</label>
                                </div>
                                <input
                                    type="text"
                                    placeholder="**********"
                                    required="required"
                                    value={updatePwd}
                                    onChange={(e) => setUpdatePwd(e.target.value)}
                                    className="inputChange4" />
                            </div>
                            <div className="input-group4">
                                <label>Confirm Password:</label>
                                <input
                                    type="text"
                                    placeholder="**********"
                                    required="required"
                                    value={updatePwdConfirm}
                                    onChange={(e) => setUpdatePwdConfirm(e.target.value)}
                                    className="inputChange4"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-section4">
                    <h2>Personal Information</h2>
                    <div className="input-row4">
                        <div className="input-group14">
                            <div className="inputsG14">
                                <CheckBox/>
                                <label className="name-p4">Phone Number:</label>
                            </div>
                            <input
                                className="input-name-p4"
                                type="text"
                                required="required"
                                value={updatePhone}
                                onChange={(e) => setUpdatePhone(e.target.value)}
                                placeholder={user.phone}/>
                        </div>
                        <div className="input-group24">
                            <div className="inputsG24">
                                <CheckBox/>
                                <label className="id-p4">Address:</label>
                            </div>
                            <input
                                type="text"
                                required="required"
                                value={updateAddress}
                                placeholder={user.address}
                                onChange={(e) => setUpdateAddress(e.target.value)}
                                className="input-Address4"/>
                        </div>

                    </div>
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

export { UpdateProfile };