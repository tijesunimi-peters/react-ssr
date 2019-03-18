import React from 'react';
import { shallow } from 'enzyme';
import Header, { NavItem, NavItems } from './index';
import '../../setupTest';
import Loader from '../Loader';
import Logo from '../Logo';

it('Header renders', () => {
  shallow(<Header />);
});

it('Header renders 3 NavItem', () => {
  const header = shallow(<Header />);
  const loader = header.find(Loader);
  expect(loader).toHaveLength(1);
  expect(loader.shallow().find(Logo)).toHaveLength(1);
  expect(loader.shallow().find(NavItems)).toHaveLength(1);
  expect(loader.shallow().find(NavItem)).toHaveLength(3);
});
