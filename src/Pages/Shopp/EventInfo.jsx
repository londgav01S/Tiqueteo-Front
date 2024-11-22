import React from 'react';
import {EventInformation} from "../../Components/Shop/Buy/EventInformation";
import {AccountBaseBg} from "../../Components/Account/AccountBaseBg";
import './EContainer.css';

function EventInfo() {

    return(
        <div className="EContainer">
            <AccountBaseBg Title="Event Information">
                <EventInformation/>
            </AccountBaseBg>
        </div>
    )

}

export {EventInfo}