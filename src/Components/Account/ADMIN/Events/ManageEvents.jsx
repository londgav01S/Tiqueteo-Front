import React, {useEffect, useState} from 'react';
import {BasicEventInfo} from "./InternalComponents/BasicEvent/BasicEventInfo";
import {Locality} from "./InternalComponents/Locality/Locality";
import Select from "react-select";
import './ManageEvents.css';
import {EventImages} from "./InternalComponents/Images/EventImages";
import {EventContext} from "../../../../Contexts/EventContex";

function ManageEvents() {

    const {event, setEvent, setWasEventCreated, events, setEvents } = React.useContext(EventContext);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);


    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? '#C9DCFF' : 'white', // Color al pasar el cursor
            color: 'black',
            padding: 10,
            borderColor: '#00328f',
        }),
    };


    function handleCreateEvent() {
        fetch("http://localhost:8080/api/admin/createEvent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(event),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error al crear el evento");
                }else {
                    alert("Event created successfully");
                    setWasEventCreated(true);
                }
                return response.json();
            })
            .then((data) => {
                setEvent(data); // Guarda el evento creado
                setError(null); // Limpia cualquier error previo
            })
            .catch((err) => {
                setError(err.message); // Maneja errores en la solicitud
            });
    }

    function handleDelateEvents() {
        const id = event.value.id;
        fetch(`http://localhost:8080/api/admin/${id}/deleteEvent`, {
            method: "DELETE",
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error al eliminar el evento");
                }else {
                    alert("Event deleted successfully");
                }
                setSuccess(`Evento con ID ${id} eliminado exitosamente.`);
                setError(null); // Limpia cualquier error previo
            })
            .catch((err) => {
                setError(err.message); // Maneja errores en la solicitud
            });
    }

    const eventOptions = events.map(event => ({
        value: event,
        label: event.name
    }));

    return (
        <div className="Events-Container">
            <BasicEventInfo/>
            <div className="Separator"/>
            <EventImages/>
            <div className="Separator"/>
            <Locality/>
            <div className="Separator"/>
            <div className="buttonE-container">
                <button className="Button-E" onClick={handleCreateEvent}>Create Event</button>
                <button className="Button-E">Upload Event</button>
            </div>
            <div className="Separator"/>
            <div className="event-delate-container">
                <div className="input-groupE">
                    <label className="label-delateE">Select an Event:</label>
                    <Select
                        value={event}
                        onChange={setEvent}
                        options={eventOptions}
                        styles={customStyles}
                        placeholder="Select Event"
                        className="select-events"
                    />
                </div>
                <button className="Button-ME" onClick={handleDelateEvents}>Delete Event</button>
            </div>

        </div>
    )
}

export {ManageEvents};