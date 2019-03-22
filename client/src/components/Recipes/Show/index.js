import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import RecipeContainer from './RecipeContainer';
import Loader from '../../../shared/Loader';
import RecipeSkeletonContainer from './RecipeSkeletonContainer';

export const Pairs = styled.div`
  box-sizing: border-box;
  flex-basis: auto;
`;

export const Title = styled.div`
  font-weight: bold;

  h4 {
    font-size: 24px;
  }
`;

export const Value = styled.div`
  display: flex;
  color: #343434;
  justify-content: flex-start;

  @media screen and (min-width: 769px) {
    justify-content: ${props => (props.left ? 'flex-start' : 'flex-end')};
  }
`;

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
