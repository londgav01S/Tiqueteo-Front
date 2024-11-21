import React from 'react'
import './ScrollImage.css'


function ScrollImage({image}) {

    return (
        <div className="scrollImage">
            <img src={image.src} alt="Event" className="imageScroll" />
        </div>
    )

}

export {ScrollImage}