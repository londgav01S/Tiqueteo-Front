import React, {useContext, useEffect, useState} from 'react'
import {ScrollImage} from "./ScrollingImages/ScrollImage";
import {Search} from "./SearchInHome/Search";
import {EventContext} from "../../Contexts/EventContex";
import {EventCard} from "./Cards/EventCard";
import './BaseHome.css';

function BaseHome() {

    const {events, setEvents, images, isSearch, filteredEvents} = useContext(EventContext);
    const [randomImg, setRandomImg] = useState(images[Math.floor(Math.random() * images.length)]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setRandomImg(images[Math.floor(Math.random() * images.length)]);
        }, 5000); // Cambia la canción cada 5 segundos

        return () => clearInterval(intervalId); // Limpia el intervalo cuando el componente se desmonta
    }, []);

    return (
        <div>
            <ScrollImage image={randomImg}/>
            <div className="SearchHome margin-top">
                <Search/>
            </div>
            {isSearch && (
                filteredEvents.length > 0 ? (
                    <div className="filterContainer">
                        <h1 className="titleFeatures">Search</h1>
                        <div className="Separator"/>
                        <div className="EventCardsContainer">
                            {filteredEvents.map((event) => (
                                <div className="ESContainer">
                                    <EventCard event={event} />
                                </div>
                            ))}
                        </div>
                    </div>

            ) : (
                <p>No results found</p>
            ))}
            <div>
                <h1 className="titleFeatures">Features</h1>
                <div className="Separator"/>
            </div>

            <div className="EventCardsContainer">
                {events.map((event) => {
                    return <EventCard event={event}/>;
                })}
            </div>
        </div>
    )
}

export {BaseHome}