import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

    state = {
        persons: [
            {name: 'Max', age: 23},
            {name: 'Manu', age: 29},
            {name: 'Steffanie', age: 26}
        ],
        showPersons: false
    };

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {name: newName, age: 11},
                {name: 'Manu', age: 29},
                {name: 'Steffanie', age: 26}
            ]
        })
    };

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Max', age: 23},
                {name: 'Manu', age: 29},
                {name: event.target.value, age: 26}
            ]
        })
    };

    togglePersons = () => {
        this.setState({
            showPersons: !this.state.showPersons
        })
    };

    render() {
        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    <Person
                        name={this.state.persons[0].name}
                        age={this.state.persons[0].age}/>
                    <Person
                        name={this.state.persons[1].name}
                        age={this.state.persons[1].age}
                        click={this.switchNameHandler.bind(this, 'new Name2')}>Test my nest
                    </Person>
                    <Person
                        name={this.state.persons[2].name}
                        age={this.state.persons[2].age}
                        changed={this.nameChangeHandler}/>
                </div>
            );
        }
        return (
            <div className="App">
                <h1>Hello World!</h1>
                <p>This actually works</p>
                <button onClick={this.togglePersons}>Toggle list</button>
                {persons}
            </div>
        );
    }

}

export default App;
