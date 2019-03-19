import React from 'react';
import { shallow } from 'enzyme';
import { Rating, NoRating } from './RecipeRating';

it('recipe Rating renders', () => {
  shallow(<Rating rating={0} />);
});

it('recipe NoRating renders', () => {
  shallow(<NoRating />);
});

it('NoRating renders 5 Stars ', () => {
  const rating = shallow(<NoRating />);

  expect(rating).toHaveLength(5);
  const greyStars = rating.findWhere(r => /_grey/.test(r.key()));
  expect(greyStars).toHaveLength(5);
});

it('Rating renders NoRating', () => {
  const rating = shallow(<Rating rating={0} />);

  expect(rating.find(NoRating)).toHaveLength(1);
});

it('Rating renders 5 full Stars', () => {
  const rating = shallow(<Rating rating={5} />);
  expect(rating).toHaveLength(5);
  const stars = rating.findWhere(r => /_full/.test(r.key()));
  expect(stars).toHaveLength(5);
});

it('Rating renders 2 full Stars', () => {
  const rating = shallow(<Rating rating={2} />);
  expect(rating).toHaveLength(5);
  const stars = rating.findWhere(r => /_full/.test(r.key()));
  expect(stars).toHaveLength(2);
});

it('Rating renders combination of Stars', () => {
  const rating = shallow(<Rating rating={3.5} />);
  expect(rating).toHaveLength(5);
  const fullStars = rating.findWhere(r => /_full/.test(r.key()));
  expect(fullStars).toHaveLength(3);
  const halfStars = rating.findWhere(r => /half/.test(r.key()));
  expect(halfStars).toHaveLength(1);
  const greyStars = rating.findWhere(r => /_grey/.test(r.key()));
  expect(greyStars).toHaveLength(1);
});
