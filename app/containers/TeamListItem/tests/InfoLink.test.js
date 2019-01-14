import React from 'react';
import { mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import 'jest-styled-components';

import InfoLink from '../InfoLink';

describe('<InfoLink />', () => {
  it('should match the snapshot', () => {
    const renderedComponent = renderer.create(
      <Router>
        <InfoLink to="/" />
      </Router>
    ).toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  /*it('should have a className attribute', () => {
    const wrapper = mount(
      <Router>
        <InfoLink to="/" />
      </Router>);
    const renderedComponent = enzymeFind(wrapper, InfoLink);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const wrapper = mount(
      <Router>
        <InfoLink id={id} to="/" />
      </Router>);
    const renderedComponent = enzymeFind(wrapper, InfoLink);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const wrapper = mount(
      <Router>
        <InfoLink attribute="test" to="/" />
      </Router>);
    const renderedComponent = enzymeFind(wrapper, InfoLink);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });*/
});
