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



    return (
        <EventContext.Provider value={{
            events,
            setEvents
        }}>
            {children}
        </EventContext.Provider>
    );
}

export { EventContext, EventProvider };