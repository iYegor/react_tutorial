import React, {Component} from 'react';
import { AuthContext } from "../../../containers/App";
import PropTypes from 'prop-types';
import styles from './Person.module.css';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElement = React.createRef();
    }

    componentDidMount() {
        if (this.props.position === 0) {
            this.inputElement.current.focus();
        }
    }

    render() {
        return (
            <div className={styles.Person}>
                <AuthContext.Consumer>
                    {auth => auth ? <p>authenticated</p> : null}
                </AuthContext.Consumer>
                <p>I'm a {this.props.name} and i`m {this.props.age} years old</p>

                <input type="text"
                       ref={this.inputElement}
                       onChange={this.props.changed}
                       value={this.props.name}/>
                <p>
                    <button onClick={this.props.deletePerson}>Delete</button>
                </p>
            </div>
        )
    }
}

Person.propTypes = {
    age: PropTypes.number,
    name: PropTypes.string,
    changed: PropTypes.func,
    deletePerson: PropTypes.func
};

export default Person;