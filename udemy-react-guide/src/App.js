import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <p>This actually works</p>
          <Person name ="Test" age="26"/>
          <Person name ="Test1" age="27">Test my nest</Person>
          <Person name ="Test2" age="28"/>
      </div>
    );
  }
}

export default App;
