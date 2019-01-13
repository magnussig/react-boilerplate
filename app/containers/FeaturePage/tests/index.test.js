import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from '../messages';
import FeaturePage from '../index';

describe('<FeaturePage />', () => {

  let match;
  let users;

  // Before each test reset the item data for safety
  beforeEach(() => {
    match = {
      "params": {
        "userId": "1"
      }
    };
    users = {
      "username": "nastyhamster",
      "member_teams": [
        1
      ],
      "name": "Daniel Vaduz",
      "id": 26,
      "lead_teams": []
    }
  });

  it('should render its heading, only if user is present', () => {
    const renderedComponent = shallow(<FeaturePage users={users} />);
    expect(
      renderedComponent.contains(
        <H1>nastyhamster user info</H1>,
      ),
    ).toBe(true);

  it('should fetch user info on mount if user is in params', () => {
    const submitSpy = jest.fn();
    mount(
      <FeaturePage
        match={match}
        onSubmitForm={submitSpy}
      />,
    );
    expect(submitSpy).toHaveBeenCalled();
  });

  it('should never re-render the component', () => {
    const renderedComponent = shallow(<FeaturePage />);
    const inst = renderedComponent.instance();
    expect(inst.shouldComponentUpdate()).toBe(false);
  });
});
