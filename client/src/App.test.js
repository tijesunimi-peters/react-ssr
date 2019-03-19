import React from 'react';
import { shallow, mount } from 'enzyme';
import App, { About, Recipes, Recipe } from './App';
import Header from './shared/Header';
import { Route, MemoryRouter } from 'react-router-dom';

import fetch from './__mocks__/fetch';

beforeEach(() => {
  global.fetch = fetch;
});

it('App renders without crashing', () => {
  shallow(<App />);
});

it('App renders Header', () => {
  const app = shallow(<App />);
  expect(app.find(Header)).toHaveLength(1);
});

it('App renders 3 routes', () => {
  let app = shallow(<App />);
  expect(app.find(Route)).toHaveLength(4);
});

it('App navigates to About', () => {
  const app = mount(
    <MemoryRouter initialEntries={['/about']}>
      <App />
    </MemoryRouter>
  );

  expect(app.find(About)).toHaveLength(1);
});

it('App navigates to Recipes', () => {
  const app = mount(
    <MemoryRouter initialEntries={['/recipes']}>
      <App />
    </MemoryRouter>
  );

  expect(app.find(Recipes)).toHaveLength(1);
});

it('App navigates to Recipe', () => {
  const app = mount(
    <MemoryRouter initialEntries={['/recipes/1']}>
      <App />
    </MemoryRouter>
  );

  expect(app.find(Recipe)).toHaveLength(1);
});
