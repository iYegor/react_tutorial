import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

    state = {
        persons: [
            {name: 'Max', age: 23},
            {name: 'Manu', age: 29},
            {name: 'Steffanie', age: 26}
        ]
    };

    switchNameHandler = () => {
        this.setState({
            persons: [
                {name: 'updated1', age: 11},
                {name: 'updated2', age: 22},
                {name: 'updated3', age: 33}
            ]
        })
    };

    render() {
        return (
            <div className="App">
                <h1>Hello World!</h1>
                <p>This actually works</p>
                <button onClick={this.switchNameHandler}>Switch name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Test my nest</Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            </div>
        );
    }
}

export default App;
