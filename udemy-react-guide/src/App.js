import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <p>This actually works</p>
          <Person/>
          <Person/>
          <Person/>
      </div>
    );
  }
}

export default App;
