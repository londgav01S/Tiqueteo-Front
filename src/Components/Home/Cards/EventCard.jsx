import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import './EventCard.css';

function EventCard({ event }) {
    const navigate = useNavigate();

    const handleImageClick = () => {
        navigate('/buy', { state: { event } });
    };

    return (
        <div className="EventCardContainer">
            <img src={event.image} className="EventImage" alt={event.name} onClick={handleImageClick} />
            <h3>{event.name}</h3>
        </div>
    );
}

export { EventCard };