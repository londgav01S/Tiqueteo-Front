import React from 'react';
import './AccountBaseBg.css';

function AccountBaseBg({Title, children}) {

    return (
        <div className="AccountBaseBg">
            <div className="Title-Abb">
                {Title}
            </div>
            <div className="Separator"/>
            <div>
                {children}
            </div>

        </div>
    )
}

export {AccountBaseBg};