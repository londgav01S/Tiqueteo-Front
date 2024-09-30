import {BaseDataLogin} from "./BaseDataLogin";
import {BaseLog} from "../BaseLog";

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