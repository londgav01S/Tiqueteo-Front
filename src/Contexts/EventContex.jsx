import React, {useEffect, useState} from "react";

const EventContext = React.createContext();

function EventProvider({ children }) {

    const [events, setEvents] = useState([
        {
            id: 1,
            title: 'Blessd Tour Mundial',
            date: '2021-09-01',
            description: 'Description of event 1',
            type: 'Concert',
            srcImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS62AurQo0ykDmvFYgJEA7LbTC1vI3hvoDYAA&s"
        },{
            id: 2,
            title: 'ferxxocalipsis',
            date: '2021-09-01',
            description: 'Description of event 1',
            type: 'Concert',
            srcImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV_45yHQZqLa_kRwBWY_7LQyQ-J50qOCOEYg&s"
        },{
            id: 3,
            title: 'Mañana Será Bonito',
            date: '2021-09-01',
            description: 'Description of event 1',
            type: 'Concert',
            srcImage: "https://dentrodelgenero.com/wp-content/uploads/2023/10/Karol-G-Tour-Caracas-copia-scaled.jpg"
        },{
            id: 4,
            title: 'FEP',
            date: '2021-09-01',
            description: 'Description of event 1',
            type: 'Festival',
            srcImage: "https://cdn.eticket.co/imagenes/imgEventos/240918195408670_poster_FEP2025VIERNES_CARTEL.jpg"
        },{
            id: 5,
            title: 'Rock al Parque',
            date: '2024-11-11',
            description: 'Description of event 1',
            type: 'Festival',
            srcImage: "https://bogota.gov.co/sites/default/files/styles/1050px/public/eventos/2023-11/del-18-al-22-de-octubre-_92_-min.jpg"
        }
    ]);

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
        localities: []
    });
    const [localities, setLocalities] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState(events);
    const [isSearch, setIsSearch] = useState(false);




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
            setIsSearch
        }}>
            {children}
        </EventContext.Provider>
    );
}

export { EventContext, EventProvider };