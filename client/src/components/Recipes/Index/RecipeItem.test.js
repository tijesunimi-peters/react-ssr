import React from 'react';
import { shallow, mount } from 'enzyme';
import RecipeItem, {
  RecipeItemSkeleton,
  RecipeDetailsWrapper,
} from './RecipeItem';
import { NoRating, Rating, Star } from './RecipeRating';

it('RecipeItem renders', () => {
  mount(<RecipeItem data={{}} />);
});

it('RecipeItemSkeleton renders', () => {
  mount(<RecipeItemSkeleton />);
});

it('RecipeItem renders RecipeItemSkeleton', () => {
  const recipe = mount(<RecipeItem data={{}} />).setState({ recipe: null });
  expect(recipe.find(RecipeItemSkeleton)).toHaveLength(1);
});

it('RecipeItem renders Rating with 2 full Stars 1 half Star and 2 grey Stars', () => {
  const recipe = mount(
    <RecipeItem data={{ id: 1, name: 'Game', rating: 2.5 }} />
  ).setState({ inView: true });

  expect(recipe.find(RecipeDetailsWrapper)).toHaveLength(1);
  expect(recipe.find(NoRating)).not.toHaveLength(1);
  expect(recipe.find(Rating)).toHaveLength(1);

  const stars = recipe.find(Rating).find(Star);
  expect(stars).toHaveLength(5);

  const fullStars = stars.findWhere(r => /_full/.test(r.key()));
  expect(fullStars).toHaveLength(2);

  const halfStars = stars.findWhere(r => /half/.test(r.key()));
  expect(halfStars).toHaveLength(1);

  const greyStars = stars.findWhere(r => /_grey/.test(r.key()));
  expect(greyStars).toHaveLength(2);
});

it('RecipeItem renders NoRating', () => {
  const recipe = mount(
    <RecipeItem data={{ id: 1, name: 'Game', rating: 0 }} />
  ).setState({ inView: true });

  expect(recipe.find(NoRating)).toHaveLength(1);

  const stars = recipe.find(NoRating).find(Star);
  expect(stars).toHaveLength(5);

  const greyStars = stars.findWhere(r => /_grey/.test(r.key()));
  expect(greyStars).toHaveLength(5);
});

it('RecipeItem triggers onScroll function', () => {
  const map = {};

  jest.spyOn(RecipeItem.prototype, 'handleScroll');

  window.addEventListener = jest.fn().mockImplementation((event, cb) => {
    map[event] = cb;
  });

  jest.spyOn(window, 'removeEventListener');
  jest.spyOn(window, 'requestAnimationFrame');

  const recipe = mount(
    <RecipeItem data={{ id: 1, name: 'Game', rating: 0 }} />
  ).setState({ inView: true });

  map.scroll();

  expect(window.requestAnimationFrame).toHaveBeenCalled();
  expect(RecipeItem.prototype.handleScroll).toHaveBeenCalled();

  recipe.unmount();

  expect(window.removeEventListener).toHaveBeenCalled();
});
