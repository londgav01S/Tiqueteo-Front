import React from 'react';

const ModalContext = React.createContext();

function ModalProvider({ children }) {
    const [openLogout, setOpenLogout] = React.useState(false);

    return (
        <ModalContext.Provider value={{
            openLogout,
            setOpenLogout
        }}>
            {children}
        </ModalContext.Provider>
    );
}
export { ModalContext, ModalProvider };