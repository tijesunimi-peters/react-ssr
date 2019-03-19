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

const Recipe = loadable(
  () => import(/* webpackChunkName: 'recipe' */ './components/Recipes/Show'),
  { fallback: <div className="skeleton" /> }
);

const Recipes = loadable(
  () => import(/* webpackChunkName: 'recipes' */ './components/Recipes/Index'),
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

      <Route path="/" exact render={() => <Home />} />
      <Route path="/about" exact render={() => <About />} />
      <Route path="/recipes" exact render={() => <Recipes />} />

      <Route path="/recipes/:id" exact render={() => <Recipe />} />
    </div>
  );
};

export default App;
