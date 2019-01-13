import { shallow, mount } from 'enzyme';
import React from 'react';
import { IntlProvider } from 'react-intl';

import TeamListItem from 'containers/TeamListItem';
import List from 'components/List';
import LoadingIndicator from 'components/LoadingIndicator';
import InfoList from '../index';

describe('<InfoList />', () => {
  it('should render the loading indicator when its loading', () => {
    const renderedComponent = shallow(<InfoList loading />);
    expect(
      renderedComponent.contains(<List component={LoadingIndicator} />),
    ).toEqual(true);
  });

  it('should render an error if loading failed', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <InfoList loading={false} error={{ message: 'Loading failed!' }} />
      </IntlProvider>,
    );
    expect(renderedComponent.text()).toMatch(/Something went wrong/);
  });

  it('should render the repositories if loading was successful', () => {
    const items = [
      {
        "id": 1,
        "name": "great team"
      },
    ];
    const renderedComponent = shallow(
      <InfoList items={items} error={false} />,
    );

    expect(
      renderedComponent.contains(
        <List items={items} component={TeamListItem} />,
      ),
    ).toEqual(true);
  });

  it('should not render anything if nothing interesting is provided', () => {
    const renderedComponent = shallow(
      <InfoList items={false} error={false} loading={false} />,
    );

    expect(renderedComponent.html()).toEqual(null);
  });
});
