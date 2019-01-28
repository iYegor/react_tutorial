import React from 'react';

const validation = (props) => {
    const minLength = 5;
    let msg = props.textLength <= minLength ? 'Text too short' : 'Text long enough';
    return (
        <p>{msg}</p>
    )
};

export default validation;