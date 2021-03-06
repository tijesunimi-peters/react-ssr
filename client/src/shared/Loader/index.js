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
      mounted: this.props.mounted || false,
    };

    this.renderSkeleton = this.renderSkeleton.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ mounted: nextProps.mounted });
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.mounted === true;
  }

  renderSkeleton() {
    if (this.props.skeleton) return this.props.skeleton();

    return <div className="skeleton" />;
  }

  render() {
    return this.state.mounted ? this.props.render() : this.renderSkeleton();
  }
}

Loader.propTypes = {
  render: PropTypes.func.isRequired,
  skeleton: PropTypes.func,
  mounted: PropTypes.bool.isRequired,
};
