import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from './shared/Header';
import { Route } from 'react-router-dom';
import './setupTest';

it('App renders without crashing', () => {
  shallow(<App />);
});

it('App renders Header', () => {
  const app = shallow(<App />);
  expect(app.find(Header)).toHaveLength(1);
});

it('App renders two routes', () => {
  let app = shallow(<App />);
  expect(app.find(Route)).toHaveLength(2);
});
