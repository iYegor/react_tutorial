import React from 'react';
import './Char.css'

const charComponent = (props) => {
    return (
        <div className="CharComponentStyle" onClick={props.deleteCharComponent}>
            {props.charValue}
        </div>
    )
};

export default charComponent;