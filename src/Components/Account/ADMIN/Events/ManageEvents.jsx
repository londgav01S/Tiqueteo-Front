import React, {useState} from 'react';
import {BasicEventInfo} from "./InternalComponents/BasicEvent/BasicEventInfo";
import {Locality} from "./InternalComponents/Locality/Locality";
import Select from "react-select";
import './ManageEvents.css';
import {EventImages} from "./InternalComponents/Images/EventImages";

function ManageEvents() {

    const [events, setEvents] = useState([]);

    const [event, setEvent] = useState(null);

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
        <div className="Events-Container">
            <BasicEventInfo/>
            <div className="Separator"/>
            <EventImages/>
            <div className="Separator"/>
            <Locality/>
            <div className="Separator"/>
            <div className="buttonE-container">
                <button className="Button-E">Create Event</button>
                <button className="Button-E">Upload Event</button>
            </div>
            <div className="Separator"/>
            <div className="event-delate-container">
                <label className="label-delateE">Type of Event:</label>
                <Select
                    value={event}
                    onChange={setEvent}
                    options={events}
                    styles={customStyles}
                    placeholder="Select Event"
                    className="select-events"
                />
                <button className="Button-E">Delete Event</button>
            </div>

        </div>
    )
}

export {ManageEvents};