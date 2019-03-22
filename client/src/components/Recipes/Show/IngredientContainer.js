import React from 'react';
import styled from 'styled-components';
import { Pairs, Value, Title } from './RecipeContainer';

const IngredientImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ececec;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (min-width: 600px) {
    width: 70px;
    height: 70px;
  }
`;

export const IngredientText = styled.p`
  font-size: 14px;
  margin-right: 5px;
`;

/**
 * @name IngredientContainerComponent
 * @file Stateless component for displaying Recipe Ingredients
 * @prop {string} thumb: Image Url
 * @prop {string} text
 * @example
 *  const text = "1 Cup of Sound White onions";
 *  const textParts = text.trim().split(' ');
 *  const firstPart = textParts.slice(0, 2).join(' ');
 *  const remainigParts = textParts.slice(2).join(' ');
 *
 *  // values
 *  firstPart = '1 Cup'
 *  remainigParts = 'Sound White onions'
 */

export default ({ thumb, text }) => {
  const textParts = text.trim().split(' ');
  const firstPart = textParts.slice(0, 2).join(' ');
  const remainigParts = textParts.slice(2).join(' ');
  return (
    <Pairs className="row pair ingredient">
      <Title className="col lean mod-margin">
        <IngredientImage style={{ backgroundImage: `url(${thumb})` }} />
      </Title>
      <Value className="col lean column ingredient" left>
        <IngredientText>{firstPart}</IngredientText>
        <IngredientText>{remainigParts}</IngredientText>
      </Value>
    </Pairs>
  );
};
