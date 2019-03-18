import React from 'react';
import { shallow } from 'enzyme';
import Logo, { LogoLink } from './index';
import logoImage from '../../hellofresh-logo.svg';
import '../../setupTest';

it('Logo renders', () => {
  shallow(<Logo />);
});

it('Logo renders img', () => {
  const logo = shallow(<Logo />);
  expect(logo.find(LogoLink)).toHaveLength(1);
  const img = logo
    .find(LogoLink)
    .shallow()
    .find('img');
  expect(img).toHaveLength(1);
  expect(img.prop('src')).toEqual(logoImage);
});
