import React,{useState} from 'react';
import './index.css';
import Select from 'react-select';

function ManageCoupons() {

    //TODO: Cambiar la imagen al cupon que vamos a crear

    const [option, setOption] = useState(null);
    const [percentage, setPercentage] = useState("");
    const [selectedDate, setSelectedDate] = useState("");

    const today = new Date().toISOString().split("T")[0];

    const options = [
        { value: 'individual', label: 'Individual' },
        { value: 'Group', label: 'Group' },
        { value: 'First_Date', label: 'First Date' },
    ];

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

    function handleDateChangeDate(e) {
        setSelectedDate(e.target.value);
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
                        <div className="input-group">
                            <label>Select the type of coupon:</label>
                            <Select
                                value={option}
                                onChange={setOption}
                                options={options}
                                styles={customStyles}
                                placeholder="Select a Option"
                                className="select-op"
                            />
                        </div>
                        <div className="input-group21">
                            <label className="id-p">Discount percentage:</label>
                            <Select
                                value={percentage}
                                onChange={setPercentage}
                                options={percentageOptions}
                                styles={customStyles}
                                placeholder="Select Porcentage"
                                className="select-percentage"
                            />
                        </div>
                    </div>

                    <div className="form-section">
                        <div className="input-row">
                            <div className="input-group1">
                                <label className="name-p">Name of Coupon:</label>
                                <input className="input-name-p" type="text" placeholder="Super Coupon"/>
                            </div>
                            <div className="input-group">
                                <label htmlFor="date-picker">Expiration date:</label>
                                <input
                                    id="date-picker"
                                    type="date"
                                    value={selectedDate}
                                    onChange={handleDateChangeDate}
                                    min={today}
                                    className="input-date"
                                />
                                {selectedDate && <p>Fecha seleccionada: {selectedDate}</p>}
                            </div>
                        </div>
                    </div>
                    <button className="btn-Create-Coupon">Create Coupon</button>
                </div>

                <div className="image-section">
                    <div className="image-placeholder">
                        <div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {ManageCoupons};