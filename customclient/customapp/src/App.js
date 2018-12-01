import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = { response: 'Waiting for server...' }
    this.firstApi = "http://localhost:3001/first";
    this.secondApi = "http://localhost:3001/second";
  }
  callFirstApi = () => {
    fetch(this.firstApi).then(results => results.json()).
      then(data =>
        this.setState({ response: data })
      );
  }
  callSecondApi = () => {
    fetch(this.secondApi).then(results => results.json()).
      then(data =>
        this.setState({ response: data }, function () {
        })
      );
  }

  render() {
    return (
      <div className="App">
        {this.state.response}<br></br>
        <button onClick={this.callFirstApi}>Call First Api</button><br></br>
        <button onClick={this.callSecondApi}>Call Second Api</button>
      </div>
    );
  }
}

export default App;
