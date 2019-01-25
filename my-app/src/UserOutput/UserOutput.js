import React from 'react'
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className="OutputStyle">
            <p>{props.username}</p>
            <p>{props.text}</p>
        </div>
    )
};

export default userOutput;