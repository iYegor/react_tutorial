import React from "react";

const cockpit = (props) => (
    <>
        <h1>{props.appTitle}</h1>
        <p>This actually works</p>
        <button onClick={props.clicked}>Toggle Persons</button>
    </>
);

export default cockpit;