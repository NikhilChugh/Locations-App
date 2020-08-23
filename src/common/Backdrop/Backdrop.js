import React from 'react';
import './Backdrop.scss';

const Backdrop = (props) => {
    return (
       <div className = {`backdrop-container ${props.className}`}>
           {props.children}
       </div>
    );
}

export default Backdrop;