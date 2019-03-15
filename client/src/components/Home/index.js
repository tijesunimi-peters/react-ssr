import React from 'react';
import Loader from '../../shared/Loader';

export default () => {
  return (
    <Loader
      render={() => (
        <React.Fragment>
          <h1 className="App-title">Welcome to React</h1>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </React.Fragment>
      )}
    />
  );
};
