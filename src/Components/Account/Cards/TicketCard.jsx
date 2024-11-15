import React from 'react';
import './TicketCard.css';

function TicketCard({ ticket }) {

  return (
    <div>
        <img src={ticket.src} alt={ticket.title} className="ticket-image"/>
        <h2>{ticket.title}</h2>
    </div>
  );
}

export {TicketCard};