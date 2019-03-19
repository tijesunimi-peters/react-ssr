import React from 'react';

export default props => {
  return (
    <div className="hf-wrapper">
      <div className="hf-container">{props.children}</div>
    </div>
  );
};
