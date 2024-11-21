import React, {useState} from "react";
import {createContext} from "react";

const CouponContext = createContext();

function CouponProvider({children}) {

    const [coupon, setCoupon] = useState({
        name: "",
        percentage: "",
        date: "",
        code: "",
    });

    return (
        <CouponContext.Provider value={{
            coupon,
            setCoupon,
        }}>
            {children}
        </CouponContext.Provider>
    );
}

export { CouponContext, CouponProvider };

