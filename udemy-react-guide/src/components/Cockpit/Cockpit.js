import React from "react";

const cockpit = (props) => (
    <>
        <h1>{props.appTitle}</h1>
        <p>This actually works</p>
        <button onClick={props.clicked}>Toggle Persons</button>
        <button onClick={props.login}>Login</button>
    </>
);

export default cockpit;