import React from 'react';
import { shallow, mount } from 'enzyme';

import Recipe from './index';
import RecipeContainer, { StyledRating } from './RecipeContainer';
import Ingredient from './IngredientContainer';
import { Star } from '../Rating/RecipeRating';

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

it('Recipe crashes', () => {
  expect(() => {
    mount(<Recipe />);
  }).toThrow();
});

it('Ingredient renders without crashing', () => {
  shallow(
    <Ingredient thumb={dummyRecipe.thumb} text={dummyRecipe.ingredients[0]} />
  );
});

it('RecipeContainer onClick props triggers handleRating', () => {
  const onClick = jest.fn().mockImplementation(val => () => true);

  const container = mount(
    <RecipeContainer {...dummyRecipe} onClick={onClick} />
  );

  expect(onClick).toHaveBeenCalled();
  const styledRating = container.find(StyledRating);
  expect(styledRating).toHaveLength(1);
  const stars = styledRating.find(Star);
  expect(stars).toHaveLength(5);

  expect(onClick).toHaveBeenCalledWith(1);
  expect(onClick).toHaveBeenCalledWith(2);
  expect(onClick).toHaveBeenCalledWith(3);
  expect(onClick).toHaveBeenCalledWith(4);
  expect(onClick).toHaveBeenCalledWith(5);
});
