import React from 'react';
import { shallow } from 'enzyme';
import Recipes from './index';
import RecipeItem, { RecipeItemSkeleton } from './RecipeItem';
import '../../../setupTest';
import Loader from '../../../shared/Loader';
import fetch from '../../../__mocks__/fetch';

beforeEach(() => {
  global.fetch = fetch;
});

it('Recipes renders', () => {
  shallow(<Recipes />).setProps({ mounted: false });
});

it('Recipes renders skeleton', () => {
  const recipes = shallow(<Recipes />).setProps({ mounted: false });
  expect(recipes.find('.recipes-container')).toHaveLength(1);
  expect(recipes.find(RecipeItemSkeleton)).toHaveLength(2);
});

it('Recipes removes skeleton', () => {
  const recipes = shallow(<Recipes />).setProps({ mounted: false });
  expect(recipes.find('.recipes-container')).toHaveLength(1);
  expect(recipes.find(RecipeItemSkeleton)).toHaveLength(2);

  recipes.setState({ loading: false });

  expect(recipes.find(RecipeItemSkeleton)).toHaveLength(0);
  expect(recipes.find('.recipes-container')).toHaveLength(0);
});

it('Recipes renders content', () => {
  const recipes = shallow(<Recipes />).setProps({ mounted: false });
  expect(fetch).toHaveBeenCalled();

  expect(recipes.state().recipes).toHaveLength(0);
  expect(recipes.find(RecipeItem)).toHaveLength(0);

  recipes
    .setProps({
      mounted: false,
      data: [{ id: 1, name: 'First' }, { id: 10, name: 'Second' }],
    })
    .setState({
      loading: false,
      recipes: [{ id: 1, name: 'First' }, { id: 10, name: 'Second' }],
    })
    .find(Loader)
    .shallow();

  // expect(recipes.find(RecipeItem)).toHaveLength(2);
  expect(recipes.state().recipes).toHaveLength(2);
  expect(recipes.find('h1')).toHaveLength(1);
  expect(recipes.find('h1').text()).toEqual('Recipes');
});
