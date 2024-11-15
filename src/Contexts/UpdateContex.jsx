import React, {useEffect, useState} from "react";

const UpdateContext = React.createContext();

function UpdateProvider({ children }) {

    const [updateEmail, setUpdateEmail] = useState(false);
    const [updatePwd, setUpdatePwd] = useState(false);
    const [updateAddress, setUpdateAddress] = useState(false);
    const [updatePhone, setUpdatePhone] = useState(false);

    return (
        <UpdateContext.Provider value={{
            updateEmail,
            setUpdateEmail,
            updatePwd,
            setUpdatePwd,
            updateAddress,
            setUpdateAddress,
            updatePhone,
            setUpdatePhone
        }}>
            {children}
        </UpdateContext.Provider>
    );
}

export { UpdateContext, UpdateProvider };