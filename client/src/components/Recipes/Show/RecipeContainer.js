import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Pairs, Value, Title } from './index';
import Container from '../../../shared/Container';
import { Rating } from '../Rating/RecipeRating';
import IngredientContainer from './IngredientContainer';
import { durationParser } from '../../../../../utils/timeParser';
import Favorite from '../Favorite';

const SpacedDescription = styled.div`
  margin-top: ${props => (props.normal ? 'unset' : '20px')};
  padding-top: ${props => (props.normal ? 'unset' : '20px')};
  padding-left: 15px;
  padding-right: 15px;
  border-top: ${props =>
    props.normal ? 'unset' : '1px solid rgb(247, 246, 244)'};
  flex: ${props => (props.flex1 ? 1 : 2)};
`;

const WhiteSpacedCol = styled(SpacedDescription)`
  padding: 20px 30px;

  @media screen and (min-width: 769px) {
    margin-right: 15px;
    margin-left: 15px;

    &:last-child {
      margin-right: auto;
    }

    &:first-child {
      margin-left: auto;
    }
  }
`;

const StyledRating = styled(Rating)`
  margin-left: unset;
  margin: 20px 0;
`;

const RelativeContainer = styled(Container)`
  position: relative;
  min-height: 350px;
  padding-bottom: 50px;
  border: solid 1px #f7f6f4;
  z-index: 100;
`;

const RecipeImage = styled.img`
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

/**
 * @name RecipeContainerComponent
 * @file Stateless Component for displaying Recipe
 * @prop {string} calories
 * @prop {array}  ingredients
 * @prop {string} headline
 * @prop {string} description
 * @prop {string} difficulty
 * @prop {string} image: url
 * @prop {string} name
 * @prop {number} rating
 * @prop {number} favorites
 * @prop {string} fats
 * @prop {string} carbos
 * @prop {string} proteins
 * @prop {string} thumb: image url
 * @prop {string} time: ISO 8601 interval
 */

const RecipeContainer = props => {
  const {
    calories,
    ingredients,
    headline,
    description,
    difficulty,
    image,
    name,
    rating,
    favorites,
    fats,
    carbos,
    proteins,
    thumb,
    time,
  } = props;

  return (
    <>
      <div className="hf-wrapper mod-relative">
        <div className="recipe-image-wrapper">
          <RecipeImage src={image} />
        </div>
      </div>
      <RelativeContainer className="mod-small white padded recipe-description">
        <div className="row">
          <SpacedDescription className="col column" normal>
            <h1>{name}</h1>
            <h4>{headline}</h4>
            <StyledRating normal rating={rating || 0} starSize="24" label />
          </SpacedDescription>
          <SpacedDescription className="col" flex1 normal>
            <Pairs className="row pair">
              <Value className="col">
                <Favorite count={favorites} />
              </Value>
            </Pairs>
          </SpacedDescription>
        </div>
        <div className="row">
          <SpacedDescription className="col">
            <p>{description}</p>
          </SpacedDescription>
          <SpacedDescription className="col column" flex1>
            <Pairs className="row pair">
              <Title className="col">Preparation Time</Title>
              <Value className="col">{durationParser(time)}</Value>
            </Pairs>
            <Pairs className="row pair">
              <Title className="col">Cooking Difficulty</Title>
              <Value className="col">Level {difficulty}</Value>
            </Pairs>
          </SpacedDescription>
        </div>
      </RelativeContainer>
      <RelativeContainer className="mod-small">
        <div className="row top-align">
          <WhiteSpacedCol className="col white" normal>
            <Pairs className="row pair">
              <Title className="col">
                <h4>Ingredients</h4>
              </Title>
            </Pairs>
            <div className="row no-column">
              {ingredients.map((ingredient, index) => {
                return (
                  <div
                    className="col half-basis no-column"
                    key={`${ingredient.replace(/\s/g, '_')}_${index}`}>
                    <IngredientContainer text={ingredient} thumb={thumb} />
                  </div>
                );
              })}
            </div>
          </WhiteSpacedCol>
          <WhiteSpacedCol className="col white column" flex1 normal>
            <Pairs className="row pair">
              <Title className="col">
                <h4>Nutrition Values</h4>
              </Title>
              <Value className="col">/per serving</Value>
            </Pairs>
            {calories && (
              <Pairs className="row pair">
                <Title className="col">Energy (kJ)</Title>
                <Value className="col">{calories}</Value>
              </Pairs>
            )}
            {carbos && (
              <Pairs className="row pair">
                <Title className="col">Carbohydrate</Title>
                <Value className="col">{carbos}</Value>
              </Pairs>
            )}
            {fats && (
              <Pairs className="row pair">
                <Title className="col">Fats</Title>
                <Value className="col">{fats}</Value>
              </Pairs>
            )}
            {proteins && (
              <Pairs className="row pair">
                <Title className="col">Proteins</Title>
                <Value className="col">{proteins}</Value>
              </Pairs>
            )}
          </WhiteSpacedCol>
        </div>
      </RelativeContainer>
    </>
  );
};

RecipeContainer.propTypes = {
  calories: PropTypes.string,
  carbos: PropTypes.string,
  description: PropTypes.string.isRequired,
  difficulty: PropTypes.number,
  favorites: PropTypes.number,
  headline: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  ingredients: PropTypes.array.isRequired,
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number,
  thumb: PropTypes.string,
  time: PropTypes.string,
};

export default RecipeContainer;
