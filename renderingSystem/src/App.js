import React, { Component, Fragment } from 'react';
// import logo from './hellofresh-logo.svg';
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
                <div className="skeleton nav"></div>
              </header>
            </div>
          </div>
          <div className="hf-wrapper">
            <div className="hf-container">
              <div className="skeleton intro"></div>
            </div>
          </div>
      </Fragment>
    );
  }
}

export default App;
