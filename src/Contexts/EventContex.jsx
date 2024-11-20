import React, {useEffect, useState} from "react";

const EventContext = React.createContext();

function EventProvider({ children }) {

    const [events, setEvents] = useState([
        {
            id: 1,
            title: 'Event 1',
            date: '2021-09-01',
            description: 'Description of event 1',
            srcImage: "https://latino.tubarco.news/wp-content/uploads/2024/03/Diseno-sin-titulo-6.png"
        }
    ]);

    const [event, setEvent] = useState(null);
    const [eventName, setEventName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [capacity, setCapacity] = useState('');
    const [localities, setLocalities] = useState([]);
    const [localityName, setLocalityName] = useState('');



    return (
        <EventContext.Provider value={{
            events,
            setEvents,
            event,
            setEvent,
            eventName,
            setEventName,
            address,
            setAddress,
            city,
            setCity,
            description,
            setDescription,
            price,
            setPrice,
            capacity,
            setCapacity,
            localities,
            setLocalities,
            localityName,
            setLocalityName
        }}>
            {children}
        </EventContext.Provider>
    );
}

export { EventContext, EventProvider };