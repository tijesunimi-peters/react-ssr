import React from 'react';
import loadable from '@loadable/component';
import Header from './shared/Header';
import { Route } from 'react-router-dom';

/**
 * Webpack splits the component and names the split using the webpackChunkName<br />
 * - location: `/client/src/App.js`
 * - exports `/renderingSystem/dist/home.js`
 */
const Home = loadable(
  () => import(/* webpackChunkName: "home" */ './components/Home'),
  { fallback: <div className="skeleton" /> }
);

const About = loadable(
  () => import(/* webpackChunkName: "about" */ './components/About'),
  { fallback: <div className="skeleton" /> }
);

/**
 * @name App
 *
 * @file App Component is used for SSR and Client Rendering
 */
const App = () => {
  return (
    <div>
      <Header />
      <div className="hf-wrapper">
        <div className="hf-container">
          <Route path="/" exact render={() => <Home />} />
          <Route path="/about" exact render={() => <About />} />
        </div>
      </div>
    </div>
  );
};

export default App;
