import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      arr: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese'],
      userInput: ''
    }
  }

  handleChange(val) {
    this.setState({ userInput: val })
  }

  render() {
    let displayArray = this.state.arr.filter((el) => {
      return el.includes(this.state.userInput)
    }).map((el, i) => {
      return <h2 key={ i }>{ el }</h2>
    })

    // let displayArray = this.state.arr.filter((el) => el.startsWith(this.state.userInput)).map((el, i) => {
    //   return (
    //     <h2 key={ i }>{ el }</h2>
    //   )
    // } )

    return (
      <div className="App">
        <input onChange={(e) => this.handleChange(e.target.value)}></input>
        {displayArray}
      </div>
    );
  }
}

export default App;
