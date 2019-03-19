import React from 'react';
import { shallow } from 'enzyme';
import Header, { NavItem, NavItems } from './index';
import Loader from '../Loader';
import Logo from '../Logo';

it('Header renders', () => {
  shallow(<Header />).setProps({ mounted: false });
});

it('Header renders 3 NavItem', () => {
  const header = shallow(<Header />);
  const loader = header.setProps({ mounted: true }).find(Loader);
  expect(loader).toHaveLength(1);
  expect(loader.shallow().find(Logo)).toHaveLength(1);
  expect(loader.shallow().find(NavItems)).toHaveLength(1);
  expect(loader.shallow().find(NavItem)).toHaveLength(3);
});
