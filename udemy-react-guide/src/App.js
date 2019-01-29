import React, {Component} from 'react';
import styles from './App.module.css';
import Person from './Person/Person';
import Validation from './Validation/Validation';
import Char from './Char/Char';

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

    togglePersons = () => {
        this.setState({
            showPersons: !this.state.showPersons
        })
    };
    textChangeHandler = (event) => {
        const text = event.target.value;
        const charComponents = text.split('');
        this.setState({
            inputTextLength: text.length,
            charComponents: charComponents,
            textValue: text
        });
    };

    deleteCharComponentHandler = (index) => {
        const charComponents = [...this.state.charComponents];
        charComponents.splice(index, 1);
        const textValue = charComponents.join('');
        this.setState({
            charComponents: charComponents,
            inputTextLength: charComponents.length,
            textValue: textValue
        });
    };

    render() {
        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {
                        this.state.persons.map((person, index) => {
                            return <Person
                                key={person.id}
                                name={person.name}
                                age={person.age}
                                deletePerson={() => this.deletePersonHandler(index)}
                                changed={(event) => this.nameChangeHandler(event, person.id)}
                            />
                        })
                    }
                </div>
            );
        }

        const charList = this.state.charComponents.map((charComponent, index) => {
            return <Char
                charValue={this.state.charComponents[index]}
                deleteCharComponent={() => this.deleteCharComponentHandler(index)}
                key={index}
            />;
        });
        return (
            <div className={styles.App}>
                <h1>Hello World!</h1>
                <p >This actually works</p>
                <button
                    onClick={this.togglePersons}
                >Toggle Persons
                </button>
                {persons}

                <Validation textLength={this.state.textValue.length}/>
                <input type="text" onChange={this.textChangeHandler} value={this.state.textValue}/>
                <p>{this.state.textValue.length}</p>
                {charList}
            </div>
        );
    }

}

export default App;
