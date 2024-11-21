import React, { useContext, useState } from 'react';
import Select from "react-select";
import './BasicEventInfo.css';
import { EventContext } from "../../../../../../Contexts/EventContex";

function BasicEventInfo() {
    const { event, setEvent } = useContext(EventContext);

    // Ensure event is always initialized with a valid object
    const initialEventState = {
        name: '',
        address: '',
        city: '',
        description: '',
        type: '',
        eventDate: '',
    };

    const [localEvent, setLocalEvent] = useState(event || initialEventState);
    const today = new Date().toISOString().split("T")[0];
    const [selectedDate, setSelectedDate] = useState("");
    const eventsTypes = [
        { value: 'concert', label: 'Concert' },
        { value: 'sport', label: 'Sport' },
        { value: 'theater', label: 'Theater' },
        { value: 'festival', label: 'Festival' },
        { value: 'other', label: 'Other' }
    ];

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? '#C9DCFF' : 'white',
            color: 'black',
            padding: 10,
            borderColor: '#00328f',
        }),
    };

    const handleInputChange = (field, value) => {
        setLocalEvent(prevEvent => ({
            ...prevEvent,
            [field]: value
        }));
        setEvent(prevEvent => ({
            ...prevEvent,
            [field]: value
        }));
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
                        value={localEvent.name}
                        className="input-E"
                        onChange={(e) => handleInputChange('name', e.target.value)}
                    />
                </div>
                <div className="input-groupE">
                    <label>Address:</label>
                    <input
                        type="text"
                        placeholder="Kloosterstraat 90"
                        className="input-E"
                        required="required"
                        value={localEvent.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                    />
                </div>
                <div className="input-groupE">
                    <label>City:</label>
                    <input
                        type="text"
                        placeholder="Boom"
                        className="input-E"
                        required="required"
                        value={localEvent.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                    />
                </div>
                <div className="input-groupE">
                    <label>Description:</label>
                    <input
                        type="text"
                        placeholder="The best event in the world"
                        className="input-E"
                        required="required"
                        value={localEvent.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                    />
                </div>
                <div className="input-groupE">
                    <label htmlFor="date-picker">Expiration date:</label>
                    <input
                        id="date-picker"
                        type="date"
                        value={localEvent.eventDate}
                        onChange={(e) => handleInputChange('eventDate', e.target.value)}
                        min={today}
                        className="input-date"
                    />
                </div>
                <div className="input-groupE1">
                    <label className="label-event">Type of Event:</label>
                    <Select
                        value={eventsTypes.find(type => type.value === localEvent.type) || null}
                        onChange={(e) => handleInputChange('type', e.value)}
                        options={eventsTypes}
                        styles={customStyles}
                        placeholder="Select Event"
                        className="select-events"
                    />
                </div>

            </div>
        </div>
    );
}

export {BasicEventInfo};