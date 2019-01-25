import React, {Component} from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'

class App extends Component {

    state = {
        username : 'Dora'
    };

    switchUsernameHandler = (event) => {
        this.setState({
            username : event.target.value
        });
    };

    render() {
        return (
            <div className="App">
                <UserOutput
                    username='Peppa'
                    text='text from props1'/>
                <UserOutput
                    username={this.state.username}
                    text='text from props2'/>
                <UserInput
                    username={this.state.username}
                    changed={this.switchUsernameHandler}/>
            </div>
        );
    }
}

export default App;
