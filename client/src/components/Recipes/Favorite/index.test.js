import React from 'react';
import { shallow } from 'enzyme';
import Favorite, { Count } from './index';

it('Favorite renders without crashing', () => {
  shallow(<Favorite />);
});

it('Favorite renders Count', () => {
  const favorite = shallow(<Favorite count={20} />);

  expect(favorite.find(Count)).toHaveLength(1);
  expect(favorite.find(Count).text()).toEqual('20');
});

it('Favorite does not render Count', () => {
  const favorite = shallow(<Favorite count={0} />);

  expect(favorite.find(Count)).not.toHaveLength(1);
});
