import React from 'react';
import PropTypes from 'prop-types';

/**
 * @file Loader wrapper components for mounting components uses render props
 * @class Loader
 * @requires {render|function}
 */
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

Loader.propTypes = {
  render: PropTypes.func.isRequired,
};
