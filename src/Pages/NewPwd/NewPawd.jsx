import {DataRecoverPassword} from "../../Components/Log/RecoverPassword/DataRecoverPassword";
import {BaseLog} from "../../Components/Log/BaseLog";
import {DataNewPassword} from "../../Components/NewPassword/DataNewPassword";


function NewPawd() {

    return (
        <div>
            <BaseLog
                PAGETITLE={<><span>New</span><br /><span>Password</span></>}
                PAGEDESCRIPTION=""
                PAGEDESCRIPTION2=""
                COMPONENT={DataNewPassword}
            />
        </div>
    )
}

export {NewPawd}