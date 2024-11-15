import React from 'react'
import {ManageEvents} from "../../../Components/Account/ADMIN/Events/ManageEvents";
import {AccountBaseBg} from "../../../Components/Account/AccountBaseBg";

function Events() {
    return (
        <div>
            <AccountBaseBg Title="Management of Events">
                <ManageEvents/>
            </AccountBaseBg>
        </div>
    )
}

export {Events};