import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import './EventCard.css';

function EventCard({event}) {

    const navigate = useNavigate();

    function handleChangeToBuy() {
        navigate(`/buy/${event.id}`);
    }

    return (
        <div className="EventCardContainer">
            <img src={event.srcImage} className="EventImage" alt={""}/>
            <h3 onClick={handleChangeToBuy}>{event.title}</h3>
        </div>
    );

}

export {EventCard}