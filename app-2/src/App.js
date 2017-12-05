import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      arr: [
        'pizza',
        'pipizza',
        'pipipizza',
        'pipipipizza',
        'pipipipizzzzza'
      ]
    }
  }
  

  render() {
    // const showArray = this.state.arr.map((el) => el + ' ')
    let displayArray = this.state.arr.map((el, i) => {
      return (
        <h2 key={ i }>{ el }</h2>
      )
    } )

    return (
      // <div>
      //   {showArray}
      // </div>

      // <div className="App">
      //   <h1>
      //     <ul>
      //       <li>{this.state.arr[0]}</li>
      //       <li>{this.state.arr[1]}</li>
      //       <li>{this.state.arr[2]}</li>
      //       <li>{this.state.arr[3]}</li>
      //       <li>{this.state.arr[4]}</li>
      //     </ul>
      //   </h1>
      // </div>     
      
      <div className="App">
        { displayArray }
      </div>
    );
  }
}

export default App;
