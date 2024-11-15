import React, {useContext} from 'react';
import {MyProfile} from "../../../Components/Account/Profile/MyProfile";
import {AccountBaseBg} from "../../../Components/Account/AccountBaseBg";
import {LoginContext} from "../../../Contexts/LoginContext";

function Profile({user}) {

    return (
        <div>
            <AccountBaseBg Title="MY PROFILE">
                <MyProfile user={user} />
            </AccountBaseBg>
        </div>
      );
}

export { Profile };