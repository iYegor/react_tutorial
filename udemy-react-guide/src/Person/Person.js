import React from 'react'
import styles from './Person.module.css'

const person = (props) => {
    return (
        <div className={styles.Person}>
            <p>I'm a {props.name} and i`m {props.age} years old</p>
            <input type="text" onChange={props.changed} value={props.name}/>
            <p><button onClick={props.deletePerson}>Delete</button></p>

        </div>
    )
};

export default person;