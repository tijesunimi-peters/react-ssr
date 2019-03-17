import React from 'react';
import Loader from '../../shared/Loader';

export default () => {
  return (
    <Loader
      render={() => (
        <React.Fragment>
          <h1 className="App-title">Welcome to HelloFresh</h1>
          <p className="App-intro">Click on the Link to Find Amazing Recipes</p>
        </React.Fragment>
      )}
    />
  );
};
