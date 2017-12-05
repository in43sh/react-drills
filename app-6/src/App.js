import React, { Component } from 'react';
import Todo from './Todo'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      tasks: [],
      userInput: ''
    }
  }

  handleChange(val) {
    this.setState({userInput: val});
  }

  addToDo (val) {
    var arr = this.state.tasks.slice();
    arr.push(val)
    this.setState({tasks: arr, userInput: ''  })
  }

  render() {
    return (
      <div>
        <h1>My to-do list:</h1>
        <input onChange={ (e) => this.handleChange(e.target.value) } ></input>
        <button onClick={ this.addToDo(this.state.userInput) }></button>
        <Todo todos={ this.state.tasks }/>
      </div>
    );
  }
}

export default App;
