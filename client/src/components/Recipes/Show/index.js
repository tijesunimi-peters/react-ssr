import React from 'react';
import PropTypes from 'prop-types';

import RecipeContainer from './RecipeContainer';
import Loader from '../../../shared/Loader';
import RecipeSkeletonContainer from './RecipeSkeletonContainer';

/**
 * @class
 * @name RecipeComponent
 * @description Class component that renders the Recipe and manages rating of the recipe
 */
class Recipe extends React.Component {
  constructor(props) {
    super(props);

    this.state = { mounted: false, rating: props.rating };
    this.handleRating = this.handleRating.bind(this);
  }

  componentDidMount() {
    if (this.props.id == undefined) {
      throw new Error('Could not find Recipe!');
    } else {
      this.setState({ mounted: true });
    }
  }

  /**
   * @name RecipeComponent.handleRating
   * @param {number} val: the rating number
   */
  handleRating(val) {
    return () => {
      this.setState({ rating: val });
    };
  }

  render() {
    const properties = Object.assign(
      { ...this.props },
      { rating: this.state.rating }
    );

    return (
      <Loader
        mounted={this.state.mounted}
        skeleton={() => <RecipeSkeletonContainer />}
        render={() => (
          <RecipeContainer {...properties} onClick={this.handleRating} />
        )}
      />
    );
  }
}

Recipe.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Recipe;
