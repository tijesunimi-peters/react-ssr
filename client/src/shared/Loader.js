import React from 'react';

export default class Loader extends React.Component {
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
    return this.state.mounted ? (
      this.props.render(this.props)
    ) : (
      <div className="skeleton" />
    );
  }
}
