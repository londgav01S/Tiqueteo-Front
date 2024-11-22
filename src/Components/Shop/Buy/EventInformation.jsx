import React from "react";
import { useLocation } from "react-router-dom";
import { BasicEventInfo } from "./BasicInfo/BasicEventInfo";

function EventInformation() {
    const location = useLocation();
    const { event } = location.state || {};

    return (
        <div>
            {event ? <BasicEventInfo event={event} /> : <p>No event data available</p>}
        </div>
    );
}

export { EventInformation }