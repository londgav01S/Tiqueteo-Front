import {BaseLog} from "../../Components/Log/BaseLog";
import {DataRegisterUser} from "../../Components/Log/RegisterUserView/DataRegisterUser";

function RegisterUser() {
    return (
        <BaseLog
            PAGETITLE="Register now"
            PAGEDESCRIPTION="Your adventure starts"
            PAGEDESCRIPTION2="here"
            COMPONENT={DataRegisterUser}
        />

    );
}

export {RegisterUser};