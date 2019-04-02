import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../../client/src/components/App.jsx';

describe('does it render', () => {
  test('Component rendered', () => {
    const component = shallow(<App />);
    expect(component.exists()).toBe(true);
  });
});
