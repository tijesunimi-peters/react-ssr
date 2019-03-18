import React from 'react';
import { mount, shallow } from 'enzyme';
import Home from './index';
import Loader from '../../shared/Loader';
import '../../setupTest';

it('Home renders', () => {
  shallow(<Home />);
});

it('Home renders Loader', () => {
  const home = shallow(<Home />);
  const loader = home.find(Loader);
  expect(loader).toHaveLength(1);
});

it('Home renders content', () => {
  const home = mount(<Home />);
  const h1 = home.find('h1');
  expect(home.find('h1')).toHaveLength(1);
  expect(h1.text()).toEqual('Welcome to HelloFresh');
});
