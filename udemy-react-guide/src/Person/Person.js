import React from 'react'
import styles from './Person.module.css'

const person = (props) => {

    let rand = Math.random();

    if (rand > 0.8)
    {
        throw new Error("Something went wrong...");
    }

    return (
        <div className={styles.Person}>
            <p>I'm a {props.name} and i`m {props.age} years old</p>
            <input type="text" onChange={props.changed} value={props.name}/>
            <p><button onClick={props.deletePerson}>Delete</button></p>

        </div>
    )
};

export default person;