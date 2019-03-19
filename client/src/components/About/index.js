import React from 'react';
import Loader from '../../shared/Loader';

export default class About extends React.Component {
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
            <h1 className="App-title">About HelloFresh</h1>
          </React.Fragment>
        )}
      />
    );
  }
}
