import React, { Component } from 'react';
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

/*
 We encourage our candidates to over-engineer,
 so please feel free to use any other styling methodology
 e.g., Emotion, Fela, SASS, etc.
 */

class App extends Component {
  constructor(props) {
    super(props);
    this.appRef = React.createRef();
  }

  render() {
    return (
      <div ref={this.appRef}>
        <Header />
        <div className="hf-wrapper">
          <div className="hf-container">
            <Route path="/" exact render={() => <Home />} />
            <Route path="/about" exact render={() => <About />} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
