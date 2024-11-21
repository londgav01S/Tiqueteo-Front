import React, {useState} from "react";

const LoginContext = React.createContext();

function LoginProvier({ children }) {

    const [isAdmin, setIsAdmin] = useState(false);
    const [isUser, setIsUser] = useState(false);
    const [userLogged, setUserLogged] = useState(null);
    const [isLoged, setIsLoged]= useState(false);


    return (
        <LoginContext.Provider value={{
            isAdmin,
            setIsAdmin,
            isUser,
            setIsUser,
            userLogged,
            setUserLogged,
            isLoged,
            setIsLoged
        }}>
            {children}
        </LoginContext.Provider>
    );
}

export { LoginContext, LoginProvier };