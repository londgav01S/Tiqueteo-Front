import React, {useContext} from "react";
import {HeadBar} from "../../Components/Home/HeadBar/HeadBar";
import {ScrollImage} from "../../Components/Home/ScrollingImages/ScrollImage";
import {EventContext} from "../../Contexts/EventContex";

function HomePage() {

    const {events} = useContext(EventContext);

    return (
        <div>
            <ScrollImage Event={events[0]}/>
        </div>

    );
}

export {HomePage}