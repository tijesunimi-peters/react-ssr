import React from 'react';
import { mount, shallow } from 'enzyme';
import Router from './Router';
import App from './App';
import './setupTest';

it('Router mounts without crashing', () => {
  mount(<Router />);
});

it('Router renders App', () => {
  let router = shallow(<Router />);
  expect(router.find(App)).toHaveLength(1);
});
