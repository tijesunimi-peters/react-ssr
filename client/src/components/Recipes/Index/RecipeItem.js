import React from 'react';
import styled from 'styled-components';
import { durationParser } from '../../../../../utils/timeParser';
import { NoRating, Rating } from './RecipeRating';
import PropTypes from 'prop-types';

export const RecipeWrapper = styled.div`
  width: 270px;
  margin-bottom: 25px;
  margin-right: 10px;
  min-height: 289px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);

  &:last-child {
    margin-right: 0;
  }
`;

export const RecipeImage = styled.div`
  min-height: 180px;
  max-height: 180px;
  background-color: grey;
  margin-top: 0;
  margin-bottom: 5px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const RecipeTitle = styled.h4`
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 250px;
  overflow: hidden;
`;

export const RecipeHeadline = styled.p`
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 250px;
  overflow: hidden;
  margin: 5px 0;
  color: rgba(0, 0, 0, 0.8);
  font-size: 14px;
`;

export const RecipeBottom = styled.div`
  margin-top: auto;
  display: flex;
`;

export const RecipeDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 5px 10px;
`;

export const RecipeCaloriesTime = styled.span`
  display: inline-flex;
  font-size: 14px;
  margin-right: 10px;
  opacity: 0.5;
  font-weight: bold;
`;

export const Stars = styled.div`
  margin-left: auto;
  display: flex;
`;

export const RecipeItemSkeleton = () => {
  return (
    <div className="recipe-skeleton wrapper">
      <div className="skeleton square recipe-image" />
      <div className="recipe-details">
        <div className="skeleton square small" />
        <div className="skeleton square small" />
        <div className="skeleton square in-col small recipe-bottom" />
      </div>
    </div>
  );
};

export const RecipeItemContent = ({ recipe }) => {
  return (
    <>
      <RecipeImage
        style={{
          backgroundImage: `url(${recipe.thumb})`,
        }}
      />
      <RecipeDetailsWrapper>
        <RecipeTitle>{recipe.name}</RecipeTitle>
        <RecipeHeadline>{recipe.headline}</RecipeHeadline>
        <RecipeBottom>
          <RecipeCaloriesTime>{recipe.calories || 'N/A'}</RecipeCaloriesTime>
          <RecipeCaloriesTime>{durationParser(recipe.time)}</RecipeCaloriesTime>
          <Stars>
            {!recipe.rating || recipe.rating === 0 ? (
              <NoRating />
            ) : (
              <Rating rating={recipe.rating} />
            )}
          </Stars>
        </RecipeBottom>
      </RecipeDetailsWrapper>
    </>
  );
};

class RecipeItem extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();

    this.state = {
      recipe: this.props.data,
      inView: false,
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.inView = this.inView.bind(this);
  }

  inView() {
    const boundlingClient = this.ref.current.getBoundingClientRect();

    return (
      boundlingClient.top >= 0 &&
      boundlingClient.left >= 0 &&
      boundlingClient.right <=
        (window.innerWidth || document.documentElement.clientWidth) &&
      boundlingClient.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  handleScroll() {
    if (!this.state.inView && this.inView()) {
      this.setState({ inView: true });
    }
  }

  componentDidMount() {
    this.handleScroll();
    window.addEventListener('scroll', () => {
      requestAnimationFrame(() => {
        this.handleScroll();
      });
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    if (!this.state.recipe) return <RecipeItemSkeleton />;

    return (
      <RecipeWrapper ref={this.ref}>
        {!this.state.inView ? (
          <RecipeItemSkeleton />
        ) : (
          <RecipeItemContent recipe={this.state.recipe} />
        )}
      </RecipeWrapper>
    );
  }
}

RecipeItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default RecipeItem;
