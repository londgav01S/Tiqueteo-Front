import {MyProfile} from "../../../Components/Account/Profile/MyProfile";
import {AccountBaseBg} from "../../../Components/Account/AccountBaseBg";
import React from "react";
import {UpdateProfile} from "../../../Components/Account/Update/UpdateProfile";


function Update({user}) {

    return (
        <div>
            <AccountBaseBg Title="UPDATE PROFILE">
                <UpdateProfile user={user} />
            </AccountBaseBg>
        </div>
    );
}

export { Update };