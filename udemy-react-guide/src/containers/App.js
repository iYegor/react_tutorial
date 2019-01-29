import React, {Component} from 'react';
import styles from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

    state = {
        persons: [
            {id: 'asdas1', name: 'Max', age: 23},
            {id: '2dasdada', name: 'Manu', age: 29},
            {id: '3adasdas', name: 'Steffanie', age: 26}
        ],
        showPersons: false,
        charComponents: [],
        textValue: ''
    };

    deletePersonHandler = (index) => {
        const persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({persons: persons});
    };

    nameChangeHandler = (event, personId) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === personId;
        });
        const newCopyOfPerson = {...this.state.persons[personIndex]};
        newCopyOfPerson.name = event.target.value;
        const newCopyOfPersons = [...this.state.persons];
        newCopyOfPersons[personIndex] = newCopyOfPerson;
        this.setState({persons: newCopyOfPersons});
    };

    togglePersonsHandler = () => {
        this.setState({
            showPersons: !this.state.showPersons
        })
    };

    render() {
        return (
            <div className={styles.App}>
                <Cockpit
                    clicked={this.togglePersonsHandler}
                />
                <Persons
                    persons={this.state.showPersons ? this.state.persons : []}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangeHandler}
                />
            </div>
        );
    }
}

export default App;
