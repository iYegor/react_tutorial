import React, {Component} from 'react'
import styles from './Person.module.css'

class Person extends Component {
    render() {
        return (
            <div className={styles.Person}>
                <p>I'm a {this.props.name} and i`m {this.props.age} years old</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
                <p>
                    <button onClick={this.props.deletePerson}>Delete</button>
                </p>
            </div>
        )
    }
};

export default Person;