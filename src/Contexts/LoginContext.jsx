import React, {useState} from "react";

const LoginContext = React.createContext();

function ContextProvider({ children }) {

    const [isAdmin, setIsAdmin] = useState(false);
    const [isUser, setIsUser] = useState(false);


    return (
        <LoginContext.Provider value={{
            isAdmin,
            setIsAdmin,
            isUser,
            setIsUser
        }}>
            {children}
        </LoginContext.Provider>
    );
}

export { LoginContext, ContextProvider };