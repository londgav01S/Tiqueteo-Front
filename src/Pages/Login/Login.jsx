import {BaseDataLogin} from "../../Components/Log/LoginView/BaseDataLogin";
import {BaseLog} from "../../Components/Log/BaseLog";

function Login() {
    return (
      <BaseLog
        PAGETITLE="Login Page"
        PAGEDESCRIPTION="Enjoy your dreams"
        PAGEDESCRIPTION2="now with us"
        COMPONENT={BaseDataLogin}
      />

    );
}

export {Login};