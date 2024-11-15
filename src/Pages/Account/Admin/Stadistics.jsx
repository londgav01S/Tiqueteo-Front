import {AccountBaseBg} from "../../../Components/Account/AccountBaseBg";
import {GStadistics} from "../../../Components/Account/ADMIN/Stadistics/GStadistics";

function Stadistics() {

    return (
        <div>
            <AccountBaseBg Title="Management of Reports">
                <GStadistics/>
            </AccountBaseBg>
        </div>
    );
}

export {Stadistics};