import React from 'react'
import './ScrollImage.css'


function ScrollImage({Event}) {

    return (
        <div className="scrollImage">
            <img src={Event.srcImage} alt="Event" className="imageScroll" />
        </div>
    )

}

export {ScrollImage}