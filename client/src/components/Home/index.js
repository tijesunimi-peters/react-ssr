import React from 'react';
import Loader from '../../shared/Loader';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mounted: false,
    };
  }

  componentDidMount() {
    this.setState({ mounted: true });
  }

  render() {
    return (
      <Loader
        mounted={this.state.mounted}
        render={() => (
          <React.Fragment>
            <h1 className="App-title">Welcome to HelloFresh</h1>
            <p className="App-intro">
              Click on the Link to Find Amazing Recipes
            </p>
          </React.Fragment>
        )}
      />
    );
  }
}
