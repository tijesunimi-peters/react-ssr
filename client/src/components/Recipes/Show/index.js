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
  justify-content: ${props => (props.left ? 'flex-start' : 'flex-end')};
  color: #343434;
`;

class Recipe extends React.Component {
  constructor(props) {
    super(props);

    this.state = { mounted: false };
  }

  componentDidMount() {
    if (this.props.id == undefined) {
      throw new Error('Could not find Recipe!');
    } else {
      this.setState({ mounted: true });
    }
  }

  render() {
    return (
      <Loader
        mounted={this.state.mounted}
        skeleton={() => <RecipeSkeletonContainer />}
        render={() => <RecipeContainer {...this.props} />}
      />
    );
  }
}

Recipe.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Recipe;
