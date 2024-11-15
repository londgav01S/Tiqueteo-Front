import {AccountBaseBg} from "../../../Components/Account/AccountBaseBg";
import {ManageCoupons} from "../../../Components/Account/ADMIN/Coupons/ManageCoupons";


function Coupons() {

    return(
        <div>
            <AccountBaseBg Title="COUPONS">
                <ManageCoupons/>
            </AccountBaseBg>
        </div>
    )
}

export {Coupons};