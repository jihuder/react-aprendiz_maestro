import React, { Component } from 'react';

const titleElement = <h1>¡Hola, mundo!</h1>;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">{titleElement}</header>
      </div>
    );
  }
}

export default App
