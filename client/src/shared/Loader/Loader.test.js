import React from 'react';
import Loader from './index';
import { shallow } from 'enzyme';
import '../../setupTest';

it('Loader renders', () => {
  shallow(<Loader render={() => {}} />);
});

it('Loader renders the render props', () => {
  const renderProps = () => <h1>Loader component</h1>;
  const loader = shallow(<Loader render={renderProps} />);

  expect(loader.find('h1')).toHaveLength(1);
  expect(loader.text()).toBe('Loader component');
});

it('Loader does not render content', () => {
  const renderProps = () => <h1>Loader component</h1>;
  const loader = shallow(<Loader render={renderProps} />, {
    disableLifecycleMethods: true,
  });

  expect(loader.find('.skeleton')).toHaveLength(1);
  expect(loader.text()).toBe('');
});
