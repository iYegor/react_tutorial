import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

    state = {
        persons: [
            {id:'asdas1', name: 'Max', age: 23},
            {id:'2dasdada', name: 'Manu', age: 29},
            {id:'3adasdas', name: 'Steffanie', age: 26}
        ],
        showPersons: false
    };

    deletePersonHandler = (index) => {
        const persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({persons:persons});
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
                    {
                        this.state.persons.map((person, index) => {
                            return <Person
                                name={person.name}
                                age={person.age}
                                click={() => this.deletePersonHandler(index)}
                                key={person.id}
                            />
                        })
                    }
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
