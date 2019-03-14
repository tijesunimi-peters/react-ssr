import React, { Component } from 'react';
import logo from './hellofresh-logo.svg';
/*
 We encourage our candidates to over-engineer,
 so please feel free to use any other styling methodology
 e.g., Emotion, Fela, SASS, etc.
 */

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <header className="App-header">
            <img src={`${logo}`} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
