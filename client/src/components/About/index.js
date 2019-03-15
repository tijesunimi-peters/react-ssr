import React from 'react';
import Loader from '../../shared/Loader';

export default () => {
  return (
    <Loader
      render={() => (
        <React.Fragment>
          <h1 className="App-title">About HelloFresh</h1>
        </React.Fragment>
      )}
    />
  );
};
