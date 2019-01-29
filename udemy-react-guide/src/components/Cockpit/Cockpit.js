import React from "react";

const cockpit = (props) => (
    <div>
        <h1>Hello World!</h1>
        <p>This actually works</p>
        <button onClick={props.clicked}>Toggle Persons</button>
    </div>
);

export default cockpit;