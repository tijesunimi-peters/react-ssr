import React from 'react';
import Loader from '../../shared/Loader';
import Container from '../../shared/Container';

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
      <Container>
        <Loader
          mounted={this.state.mounted}
          render={() => (
            <React.Fragment>
              <h1 className="App-title">About HelloFresh</h1>
            </React.Fragment>
          )}
        />
      </Container>
    );
  }
}
