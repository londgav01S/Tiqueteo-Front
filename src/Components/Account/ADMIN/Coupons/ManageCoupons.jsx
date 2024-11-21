import React, {useContext, useEffect, useState} from 'react';
import './index.css';
import Select from 'react-select';
import {CouponContext} from "../../../../Contexts/CouponContext";
import CouponTicket from "./CouponTicket";

function ManageCoupons() {

    //TODO: Cambiar la imagen al cupon que vamos a crear

    const {coupon, setCoupon} = useContext(CouponContext);

    const [percentage, setPercentage] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [couponCode, setCouponCode] = useState("");
    const [couponName, setCouponName] = useState("");

    const today = new Date().toISOString().split("T")[0];


    const percentageOptions = Array.from({ length: 101 }, (_, i) => ({
        value: i,
        label: `${i}%`
    }));

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? '#C9DCFF' : 'white', // Color al pasar el cursor
            color: 'black',
            padding: 10,
            borderColor: '#00328f',
        }),
    };

    const generateCouponCode = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let code = '';
        for (let i = 0; i < 4; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            code += characters.charAt(randomIndex);
        }
        return code;
    };

    const handleImageGenerated = (base64Image) => {
        setCoupon(prevCoupon => ({
            ...prevCoupon,
            image: base64Image
        }));
    };

    // Generar el código al cargar el componente
    useEffect(() => {
        const generatedCode = generateCouponCode();
        setCouponCode(generatedCode);
    }, []);

    function handleCreateCoupon() {
    const newCoupon = {
        name: couponName,
        percentage: percentage.value,
        date: selectedDate,
        code: couponCode,
    };

    fetch('http://localhost:8080/api/admin/createCoupon', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCoupon)
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Error desconocido');
        }
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error("Error en la solicitud:", error);
    });
}

    return(
        <div>
            <div className="form-container">
                <div className="form-left">
                    <style>
                        @import
                        url('https://fonts.googleapis.com/css2?family=Abel&family=Bigshot+One&display=swap');
                    </style>
                    <h2>Create the Coupons</h2>
                    <div className="input-row1">
                        <div className="input-group21">
                            <label className="id-p">Discount percentage:</label>
                            <Select
                                value={percentage}
                                onChange={(selectedOption) => setPercentage(selectedOption)}
                                options={percentageOptions}
                                styles={customStyles}
                                placeholder="Select Porcentage"
                                className="select-percentage"
                            />
                        </div>
                        <div className="input-group1">
                            <label className="name-p">Name of Coupon:</label>
                            <input
                                className="input-name-p"
                                type="text"
                                placeholder="Super Coupon"
                                value={couponName}
                                onChange={(e) => setCouponName(e.target.value)}

                            />
                        </div>
                    </div>

                    <div className="form-section">
                        <div className="input-row">

                            <div className="input-group111">
                                <label htmlFor="date-picker">Expiration date:</label>
                                <input
                                    id="date-picker"
                                    type="date"
                                    value={selectedDate}
                                    onChange={(e) => setSelectedDate(e.target.value)}
                                    min={today}
                                    className="input-date"
                                />
                            </div>
                            <div className="input-group112">
                                <label className="name-p">Coupon Code:</label>
                                <input
                                    className="input-name-p"
                                    type="text"
                                    placeholder="Super Coupon"
                                    value={couponCode}
                                    onChange={(e) => setCouponCode(e.target.value)}
                                    disabled
                                />
                            </div>
                        </div>


                    </div>
                    <button className="btn-Create-Coupon" onClick={handleCreateCoupon}>Create Coupon</button>
                </div>

                <div className="image-section">
                    <div className="image-placeholder">
                        <CouponTicket
                            couponCode={couponCode}
                            couponName={couponName}
                            percentage={percentage ? percentage.value : '0'}
                            expirationDate={selectedDate}
                            onImageGenerated={handleImageGenerated}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export {ManageCoupons};