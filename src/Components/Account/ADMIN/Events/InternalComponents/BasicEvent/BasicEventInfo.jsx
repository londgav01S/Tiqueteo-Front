import React, {useContext, useState} from 'react';
import Select from "react-select";
import './BasicEventInfo.css';
import {EventContext} from "../../../../../../Contexts/EventContex";


function BasicEventInfo() {

    const {event} = useContext(EventContext);

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
        <div className="BasicInfoContainer">
            <h2>Event Information</h2>
            <div className="row-Event-info">
                <div className="input-groupE">
                    <label>Event Name:</label>
                    <input
                        type="text"
                        placeholder="Super Event"
                        required="required"
                        value={'eventName'}
                        className="input-E"
                        onChange={(e) => event.name(e.target.value)}
                    />
                </div>
                <div className="input-groupE">
                    <label>Address:</label>
                    <input
                        type="text"
                        placeholder="Kloosterstraat 90"
                        className="input-E"
                        required="required"
                        value={'address'}
                        onChange={(e) => event.address(e.target.value)}
                    />
                </div>
                <div className="input-groupE">
                    <label>City:</label>
                    <input type="text"
                           placeholder="Boom"
                           className="input-E"
                           required="required"
                           value={'city'}
                           onChange={(e) => event.city(e.target.value)}
                    />
                </div>
                <div className="input-groupE">
                    <label>Description:</label>
                    <input
                        type="text"
                        placeholder="The best event in the world"
                        className="input-E"
                        required="required"
                        value={'description'}
                        onChange={(e) => event.description(e.target.value)}
                    />
                </div>
                <div className="input-groupE">
                    <label className="label-event">Type of Event:</label>
                    <Select
                        value={event}
                        onChange={(e) => event.type(e.value)}
                        options={eventsTypes}
                        styles={customStyles}
                        placeholder="Select Event"
                        className="select-events"
                    />
                </div>

            </div>
        </div>
    )
}

export {BasicEventInfo};