import React from 'react'
import Radium from 'radium';
import './Person.css'

const person = (props) => {
    const style = {
        '@media (min-width: 500px)' : {
            width: '450px'
        }
    };
    return (
        <div className="Person" style={style}>
            <p>I'm a {props.name} and i`m {props.age} years old</p>
            <input type="text" onChange={props.changed} value={props.name}/>
            <p><button onClick={props.deletePerson}>Delete</button></p>

        </div>
    )
};

export default Radium(person);