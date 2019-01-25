import React from 'react'

const userInput = (props) => {
    const inputStyle = {
        padding: '8px',
        margin: '2px',
        border: '1px solid blue',
        textAlign: 'left',
        font: 'inherit',
        width: '30%'
    };
    return (

        <div>
            <input
                type='text'
                style={inputStyle}
                onChange={props.changed}
                value={props.username}/>
        </div>
    )
};

export default userInput;