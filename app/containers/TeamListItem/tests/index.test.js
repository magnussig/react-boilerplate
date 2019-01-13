/**
 * Test the repo list item
 */

import React from 'react';
import { shallow, render } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import ListItem from 'components/ListItem';
import { TeamListItem } from '../index';

const renderComponent = (props = {}) =>
  render(
    <IntlProvider locale="en">
      <Router>
        <TeamListItem {...props} />
      </Router>
    </IntlProvider>,
  );

describe('<TeamListItem />', () => {
  let item;

  // Before each test reset the item data for safety
  beforeEach(() => {
    item = {
      "name": "Awesome Tricksters",
      "id": 2
    };
  });

  it('should render a ListItem', () => {
    const renderedComponent = shallow(<TeamListItem item={item} />);
    expect(renderedComponent.find(ListItem)).toHaveLength(1);
  });

  it('should render the team name', () => {
    const renderedComponent = renderComponent({ item });
    expect(renderedComponent.text()).toContain(item.name);
  });
});
