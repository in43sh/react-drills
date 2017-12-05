import React, { Component } from 'react';

export default class Login extends Component {
  constructor () {
    super();

    this.state = {
      username: '',
      password: ''
    };

    this.loginAlert = this.loginAlert.bind( this );
  }

  usernameField(name) {
    this.setState({username: name})
  }

  passwordField(pass) {
    this.setState({password: pass})
  }

  // loginAlert(user, pass) {
  //   alert('Username: ' + user + ' Password: ' + pass)
  // }

  loginAlert() {
    alert(`Username: ${ this.state.username } Password: ${ this.state.password }`);
  }

  

  render() {
    return (
      <div>
        <input onChange={ (e) => this.usernameField(e.target.value) }></input>
        <input onChange={ (e) => this.passwordField(e.target.value) }></input>
        {/* <button onClick={ () => {this.loginAlert(this.state.username, this.state.password)}}>Login</button> */}
        <button onClick={ this.loginAlert }>Login</button>
      </div>
    );
  }
}