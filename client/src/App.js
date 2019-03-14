import React, { Component, Fragment } from 'react';
import logo from './hellofresh-logo.svg';
/*
 We encourage our candidates to over-engineer,
 so please feel free to use any other styling methodology
 e.g., Emotion, Fela, SASS, etc.
 */

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="hf-wrapper nav">
          <div className="hf-container">
            <header className="hf-header">
              <img src={`${logo}`} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
          </div>
        </div>

        <div className="hf-wrapper">
          <div className="hf-container">
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
