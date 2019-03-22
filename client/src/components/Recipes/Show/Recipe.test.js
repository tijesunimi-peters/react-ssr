import React from 'react';
import { shallow } from 'enzyme';
import Recipe, { RecipeContainer, Ingredient } from './index';

const dummyRecipe = {
  calories: '2600 kcal',
  ingredients: ['1 Cup Onions'],
  headline: 'Lorem Ipsum',
  description: 'Lorem Ipsum',
  difficulty: 1,
  image: '',
  name: 'First Recipe',
  rating: 2.5,
  favorites: 13,
  fats: '200 g',
  carbos: '250 g',
  proteins: '65 g',
  thumb: '',
  time: 'PT45M',
  id: '1234567890',
};

it('Recipe renders without crashing', () => {
  shallow(<Recipe {...dummyRecipe} />);
});

it('RecipeContainer renders without crashing', () => {
  shallow(<RecipeContainer {...dummyRecipe} />);
});

it('Ingredient renders without crashing', () => {
  shallow(
    <Ingredient thumb={dummyRecipe.thumb} text={dummyRecipe.ingredients[0]} />
  );
});
