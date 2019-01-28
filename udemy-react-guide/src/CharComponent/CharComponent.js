import React from 'react';
import './CharComponent.css'

const charComponent = (props) => {
    return (
        <div className="CharComponentStyle" onClick={props.deleteCharComponent}>
            {props.charValue}
        </div>
    )
};

export default charComponent;