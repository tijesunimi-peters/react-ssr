import React from 'react';

export default () => {
  return (
    <>
      <div className="hf-wrapper mod-relative">
        <div className="skeleton square recipe-image-wrapper" />
      </div>
      <div className="hf-wrapper">
        <div className="hf-container mod-small white padded recipe-description">
          <div className="row">
            <div className="col mod-margin">
              <h1 className="skeleton square" />
              <h4 className="skeleton square small" />
            </div>
            <div className="col mod-margin">
              <div className="skeleton square" />
            </div>
          </div>
          <div className="row">
            <div className="col mod-margin">
              <h1 className="skeleton square" />
              <h4 className="skeleton square small" />
            </div>
            <div className="col mod-margin">
              <div className="skeleton square" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
