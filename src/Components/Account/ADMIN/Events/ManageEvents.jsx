import React, {useState} from 'react';
import {BasicEventInfo} from "./InternalComponents/BasicEventInfo";
import {Locality} from "./InternalComponents/Locality";
import Select from "react-select";
import './ManageEvents.css';
import {EventImages} from "./InternalComponents/EventImages";

function ManageEvents() {

    return (
        <div>
            <BasicEventInfo/>
            <EventImages/>
            <Locality/>
        </div>
    )
}

export {ManageEvents};