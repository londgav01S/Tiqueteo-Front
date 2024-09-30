import {BaseLog} from "../BaseLog";
import {DataRegisterUser} from "./DataRegisterUser";

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