import {BaseLog} from "../../Components/Log/BaseLog";
import {DataRecoverPassword} from "../../Components/Log/RecoverPassword/DataRecoverPassword";

function RecoverPassword() {
    return (
        <BaseLog
            PAGETITLE={<><span>Recover</span><br /><span>password</span></>}
            PAGEDESCRIPTION=""
            PAGEDESCRIPTION2=""
            COMPONENT={DataRecoverPassword}
        />

    );
}

export {RecoverPassword};