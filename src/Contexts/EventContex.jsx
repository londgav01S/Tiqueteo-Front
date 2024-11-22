import React, {useEffect, useState} from "react";

const EventContext = React.createContext();

function EventProvider({ children }) {

    const [events, setEvents] = useState([]);

    const [images, setImages] = useState([
        {id: 1, src: "https://storage.mlcdn.com/account_image/200002/zTSOknbMMJAdZK0SEJO991WeKlzVvN7P2bSj1K5b.png"},
        {id: 2, src: "https://sglaradio.com/wp-content/uploads/2024/04/ferxxo-2.webp"},
        {id: 3, src: "https://akamai.sscdn.co/uploadfile/letras/playlists/7/e/8/b/7e8beedca98c4c15a39ca576ba9333f4.jpg"},
        {id: 4, src: "https://cdn.getcrowder.com/images/1647618717327-null-feplineupea.jpg"},
        {id: 5, src: "https://mail.culturarecreacionydeporte.gov.co/sites/default/files/styles/1300/public/noticias/imagen/2024-10/rockalparque2024_1.png?itok=83NQq30B"}
    ]);

    const [reports, setReports] = useState(null);

    const [event, setEvent] = useState({
        name: '',
        address: '',
        description: '',
        city: '',
        type: '',
        eventDate: '',
        image: '',
        localities: []
    });
    const [localities, setLocalities] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState(events);
    const [isSearch, setIsSearch] = useState(false);
    const [wasEventCreated, setWasEventCreated] = useState(false);

    return (
        <EventContext.Provider value={{
            events,
            setEvents,
            event,
            setEvent,
            localities,
            setLocalities,
            reports,
            setReports,
            images,
            setImages,
            filteredEvents,
            setFilteredEvents,
            isSearch,
            setIsSearch,
            wasEventCreated,
            setWasEventCreated
        }}>
            {children}
        </EventContext.Provider>
    );
}

export { EventContext, EventProvider };