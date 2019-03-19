import React from 'react';
import { shallow } from 'enzyme';
import Home from './index';
import Loader from '../../shared/Loader';
import '../../setupTest';

it('Home renders', () => {
  shallow(<Home />);
});

it('Home renders Loader', () => {
  const home = shallow(<Home />);
  const loader = home.setProps({ mounted: false }).find(Loader);
  expect(loader).toHaveLength(1);
});

it('Home renders content', () => {
  const home = shallow(<Home />);
  const loader = home
    .setProps({ mounted: true })
    .find(Loader)
    .shallow();
  expect(loader.find('h1')).toHaveLength(1);
  expect(loader.find('h1').text()).toEqual('Welcome to HelloFresh');
});
