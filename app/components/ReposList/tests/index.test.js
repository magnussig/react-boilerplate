import { shallow, mount } from 'enzyme';
import React from 'react';
import { IntlProvider } from 'react-intl';

import RepoListItem from 'containers/RepoListItem';
import List from 'components/List';
import LoadingIndicator from 'components/LoadingIndicator';
import ReposList from '../index';

describe('<ReposList />', () => {
  it('should render the loading indicator when its loading', () => {
    const renderedComponent = shallow(<ReposList loading />);
    expect(
      renderedComponent.contains(<List component={LoadingIndicator} />),
    ).toEqual(true);
  });

  it('should render an error if loading failed', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <ReposList loading={false} error={{ message: 'Loading failed!' }} />
      </IntlProvider>,
    );
    expect(renderedComponent.text()).toMatch(/Something went wrong/);
  });

  it('should render the repositories if loading was successful', () => {
    const info = [
      {
        owner: {
          login: 'mxstbr',
        },
        html_url: 'https://github.com/react-boilerplate/react-boilerplate',
        name: 'react-boilerplate',
        open_issues_count: 20,
        full_name: 'react-boilerplate/react-boilerplate',
      },
    ];
    const renderedComponent = shallow(
      <ReposList info={info} error={false} />,
    );

    expect(
      renderedComponent.contains(
        <List items={info} component={RepoListItem} />,
      ),
    ).toEqual(true);
  });

  it('should not render anything if nothing interesting is provided', () => {
    const renderedComponent = shallow(
      <ReposList info={false} error={false} loading={false} />,
    );

    expect(renderedComponent.html()).toEqual(null);
  });
});
