import React from 'react';
import styled from 'styled-components';
import { durationParser } from '../../../../../utils/timeParser';
import { NoRating, Rating } from '../Rating/RecipeRating';
import { Link } from 'react-router-dom';

const RecipeImage = styled.div`
  min-height: 180px;
  max-height: 180px;
  background-color: grey;
  margin-top: 0;
  margin-bottom: 5px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const RecipeTitle = styled.h4`
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 250px;
  overflow: hidden;
`;

const RecipeHeadline = styled.p`
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 250px;
  overflow: hidden;
  margin: 5px 0;
  color: rgba(0, 0, 0, 0.8);
  font-size: 14px;
`;

const RecipeBottom = styled.div`
  margin-top: auto;
  display: flex;
`;

export const RecipeDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 5px 10px;
`;

const RecipeCaloriesTime = styled.span`
  display: inline-flex;
  font-size: 14px;
  margin-right: 10px;
  opacity: 0.5;
  font-weight: bold;
`;

const RecipeItemLink = styled(Link)`
  display: flex;
  flex-direction: column;
  flex: 1;
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

export const RecipeItemContainer = ({ recipe }) => {
  return (
    <RecipeItemLink to={{ pathname: `/recipes/${recipe.id}`, state: recipe }}>
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
          {!recipe.rating || recipe.rating === 0 ? (
            <NoRating />
          ) : (
            <Rating rating={recipe.rating} />
          )}
        </RecipeBottom>
      </RecipeDetailsWrapper>
    </RecipeItemLink>
  );
};
