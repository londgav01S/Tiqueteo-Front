import React, {useState} from 'react';
import Select from "react-select";
import './BasicEventInfo.css';


function BasicEventInfo() {

    const [event, setEvent] = useState(null);

    const eventsTypes= [
        {
            value: 'concert',
            label: 'Concert'
        },
        {
            value: 'sport',
            label: 'Sport'
        },
        {
            value: 'theater',
            label: 'Theater'
        },
        {
            value: 'festival',
            label: 'Festival'
        },
        {
            value: 'other',
            label: 'Other'
        }
    ];
    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? '#C9DCFF' : 'white', // Color al pasar el cursor
            color: 'black',
            padding: 10,
            borderColor: '#00328f',
        }),
    };

    return (
        <div>
            <h2>Event Information</h2>
            <div className="row-Event-info">
                <div className="input-groupE">
                    <label>Event Name:</label>
                    <input type="text" placeholder="Super Event" className="input-E"/>
                </div>
                <div className="input-groupE">
                    <label>Address:</label>
                    <input type="text" placeholder="Kloosterstraat 90" className="input-E"/>
                </div>
                <div className="input-groupE">
                    <label>City:</label>
                    <input type="text" placeholder="Boom" className="input-E"/>
                </div>
                <div className="input-groupE">
                    <label>Description:</label>
                    <input type="text" placeholder="The best event in the world" className="input-E"/>
                </div>
                <div className="input-groupE">
                    <label>Description:</label>
                    <input type="text" placeholder="The best event in the world" className="input-E"/>
                </div>
                <div className="input-groupE">
                    <label className="label-event">Type of Event:</label>
                    <Select
                        value={event}
                        onChange={setEvent}
                        options={eventsTypes}
                        styles={customStyles}
                        placeholder="Select Event"
                        className="select-events"
                    />
                </div>
                <div>
                    
                </div>

            </div>
        </div>
    )
}

export {BasicEventInfo};