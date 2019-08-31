import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goblin: {}
    }

    this.getFlower();
  }

  getFlower() {
    fetch('/goblin')
      .then(response => response.json())
      .then(data => {
        this.setState({
          goblin: data
        });
      });
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.goblin.name}</h1>
        <p>{this.state.goblin.colour}</p>
      </div>
    );
  }
}

export default App;
