import React from 'react';
import Loader from './index';
import { shallow } from 'enzyme';

it('Loader renders', () => {
  shallow(<Loader mounted={false} render={() => {}} />);
});

it('Loader renders the render props', () => {
  const renderProps = jest
    .fn()
    .mockImplementation(() => <h1>Loader component</h1>);
  const loader = shallow(<Loader mounted={true} render={renderProps} />);

  expect(loader.find('h1')).toHaveLength(1);
  expect(renderProps).toHaveBeenCalled();
  expect(loader.text()).toBe('Loader component');
});

it('Loader does not render content', () => {
  const renderProps = jest.fn();
  const loader = shallow(<Loader mounted={false} render={renderProps} />);

  expect(loader.find('.skeleton')).toHaveLength(1);
  expect(loader.text()).toBe('');
});

it('Loader renders skeleton props', () => {
  const renderProps = jest.fn();
  const skeletonProps = jest.fn().mockImplementation(() => <h1>Skeleton</h1>);
  const loader = shallow(
    <Loader mounted={false} render={renderProps} skeleton={skeletonProps} />
  );

  expect(skeletonProps).toHaveBeenCalled();
  expect(loader.text()).toBe('Skeleton');
});
