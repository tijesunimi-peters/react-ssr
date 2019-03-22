import React from 'react';
import { shallow } from 'enzyme';
import Favorite from './index';
import FavoriteContainer, { Count } from './FavoriteContainer';

it('Favorite renders without crashing', () => {
  shallow(<Favorite />);
});

it('Favorite renders Count', () => {
  const favorite = shallow(<Favorite count={20} />);

  expect(favorite.find(FavoriteContainer)).toHaveLength(1);
  expect(
    favorite
      .find(FavoriteContainer)
      .shallow()
      .text()
  ).toEqual('20');
});

it('Favorite does not render Count', () => {
  const favorite = shallow(<Favorite count={0} />);

  expect(favorite.find(Count)).not.toHaveLength(1);
});

it('Favorite click increases count by 1', () => {
  const favorite = shallow(<Favorite count={0} />);

  expect(favorite.find(Count)).not.toHaveLength(1);

  favorite.simulate('click');
  const container = favorite.find(FavoriteContainer).shallow();
  expect(container.find(Count)).toHaveLength(1);
  expect(container.find(Count).text()).toEqual('1');
});

it('Favorite two clicks increases count by 1 and descreases count by 1', () => {
  const favorite = shallow(<Favorite count={0} />);

  expect(favorite.find(Count)).not.toHaveLength(1);

  favorite.simulate('click');
  let container = favorite.find(FavoriteContainer).shallow();
  expect(container.find(Count)).toHaveLength(1);
  expect(container.find(Count).text()).toEqual('1');

  favorite.simulate('click');
  container = favorite.find(FavoriteContainer).shallow();
  expect(container.find(Count)).not.toHaveLength(1);
});
