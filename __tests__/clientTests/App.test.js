import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../../client/src/components/App.jsx';
import PartySize from '../../client/src/components/PartySize.jsx';

describe('App component mounts and renders on initialization', () => {
  test('Component rendered', () => {
    const component = shallow(<App />);
    expect(component.exists()).toBe(true);
  });
});

describe('Party size component', () => {
  test('Component renders 20 options', () => {
    const partyComp = shallow(<PartySize />);
    console.log(partyComp.find('option'));
    expect(partyComp.find('option')).toHaveLength(20);
  });
})