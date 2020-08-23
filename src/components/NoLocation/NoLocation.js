import React from 'react';
import './NoLocation.scss';

const  NoLocation = ()  => {
    return(
        <>
       <div className = 'noLocation-iconContainer'>
            <i className="icon-map-marker"></i>
       </div>
       <div className = 'noLocation-textContainer'>
         <p>Kindly Add Your Location First</p>
         <p>There is no location added right now</p>
       </div>
       </>
    )
}

export default NoLocation;