import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

/**
 * @file Entry point to the Browser.<br />
 * `BrowserRouter` manages routing in the browser
 * @name Router
 */
export default () => {
  return (
    <Router>
      <App />
    </Router>
  );
};
