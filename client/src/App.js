import React from 'react';
import loadable from '@loadable/component';
import Header from './shared/Header';
import { Route } from 'react-router-dom';

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
 * @file App Component is used for SSR and Client Rendering. Loadable library splits coomponents into chunks and the chunks are name according to the webpack chunk name.
 * Output Folder: `/renderingSystem/dist/[webpackChunkName].js`
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
