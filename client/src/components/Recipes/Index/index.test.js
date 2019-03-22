import React from 'react';
import { shallow } from 'enzyme';
import Recipes, { RecipesContainer } from './index';
import RecipeItem from './RecipeItem';
import { RecipeItemSkeleton } from './RecipeItemContainer';
import Loader from '../../../shared/Loader';
import fetch from '../../../__mocks__/fetch';

beforeEach(() => {
  global.fetch = fetch;
});

it('Recipes renders', () => {
  shallow(<Recipes />).setProps({ mounted: false });
});

it('Recipes renders skeleton', () => {
  const recipes = shallow(<Recipes />).setProps({ mounted: true });
  expect(
    recipes
      .find(Loader)
      .shallow()
      .find('.recipes-container')
  ).toHaveLength(1);
  expect(
    recipes
      .find(Loader)
      .shallow()
      .find(RecipeItemSkeleton)
  ).toHaveLength(2);
});

it('Recipes removes skeleton', () => {
  const recipes = shallow(<Recipes />).setProps({ mounted: true });
  let loader = recipes.find(Loader).shallow();
  expect(loader.find('.recipes-container')).toHaveLength(1);
  expect(loader.find(RecipeItemSkeleton)).toHaveLength(2);

  recipes.setState({ loading: false });
  loader = recipes.find(Loader).shallow();
  expect(loader.find(RecipeItemSkeleton)).toHaveLength(0);
  expect(loader.find('.recipes-container')).toHaveLength(0);
});

it('Recipes renders content', () => {
  const recipes = shallow(<Recipes />).setProps({ mounted: false });
  expect(fetch).toHaveBeenCalled();

  expect(recipes.state().recipes).toHaveLength(0);
  expect(recipes.find(RecipeItem)).toHaveLength(0);

  const loader = recipes
    .setState({
      loading: false,
      recipes: [{ id: 1, name: 'First' }, { id: 10, name: 'Second' }],
    })
    .find(Loader)
    .shallow();

  expect(loader.find(RecipesContainer)).toHaveLength(1);
  expect(loader.find(RecipeItem)).toHaveLength(2);
  expect(recipes.state().recipes).toHaveLength(2);
  expect(loader.find('h1')).toHaveLength(1);
  expect(loader.find('h1').text()).toEqual('Delicious and Quick Recipes');
});

it('Recipes renders No recipes', () => {
  const recipes = shallow(<Recipes />).setProps({ mounted: false });

  const instance = recipes.instance();
  jest.spyOn(instance, 'renderRecipes');
  jest.spyOn(instance, 'renderError');

  recipes.setState({ recipes: [], loading: false });

  const loader = recipes.find(Loader).shallow();
  expect(instance.renderRecipes).toHaveBeenCalled();
  expect(instance.renderError).toHaveBeenCalled();
  expect(loader.find('h3').text()).toEqual('No Recipes');
});

it('Recipes renders null if isError', () => {
  const recipes = shallow(<Recipes />).setProps({ mounted: false });

  const instance = recipes.instance();
  jest.spyOn(instance, 'renderRecipes');
  jest.spyOn(instance, 'renderError');

  recipes.setState({
    recipes: [{ id: 1, name: 'Game' }],
    loading: false,
    error: false,
  });

  const loader = recipes.find(Loader).shallow();
  expect(instance.renderRecipes).toHaveBeenCalled();
  expect(instance.renderError).not.toHaveBeenCalled();
});

it('Recipes renders `Could not load recipes`', () => {
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.reject({
      catch: jest.fn().mockImplementation(cb => cb()),
    })
  );

  const recipes = shallow(<Recipes />).setState({
    error: true,
    loading: false,
  });

  const loader = recipes.find(Loader).shallow();
  expect(loader.find('h3')).toHaveLength(1);
  expect(loader.find('h3').text()).toEqual('Could not load recipes');
});
