import React, {useState} from "react";

const LoginContext = React.createContext();

function LoginProvier({ children }) {

    const [isAdmin, setIsAdmin] = useState(true);
    const [isUser, setIsUser] = useState(false);
    const [userLogged, setUserLogged] = useState([
        {
            id: 1,
            name: "royer",
            user: "royis",
            email: "royer.garciap@uqvirtual.edu.co",
            password: "123456",
            phone: "3245646473",
            address: "Calle 123",
            srcImg: "https://media.licdn.com/dms/image/v2/D4E03AQE2MajnX0lRbA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724198331875?e=1736380800&v=beta&t=hPHpfPm6X_I5cvLoiZgg_veyxrQxNwT0qYbWOv5hNTo",
        }
    ]);
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