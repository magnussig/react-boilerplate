/**
 * Test the HomePage
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { IntlProvider } from 'react-intl';

import InfoList from 'components/InfoList';
import { HomePage, mapDispatchToProps } from '../index';
import { changeUsername } from '../actions';
import { loadInfo } from '../../App/actions';

describe('<HomePage />', () => {
  it('should render the info list', () => {
    const renderedComponent = shallow(
      <HomePage loading error={false} info={[]} />,
    );
    expect(
      renderedComponent.contains(
        <InfoList loading error={false} info={[]} />,
      ),
    ).toEqual(true);
  });

  it('should render fetch the info on mount if a username exists', () => {
    const submitSpy = jest.fn();
    mount(
      <IntlProvider locale="en">
        <HomePage
          username="Not Empty"
          onChangeUsername={() => {}}
          onSubmitForm={submitSpy}
        />
      </IntlProvider>,
    );
    expect(submitSpy).toHaveBeenCalled();
  });

  it('should not call onSubmitForm if username is an empty string', () => {
    const submitSpy = jest.fn();
    mount(
      <IntlProvider locale="en">
        <HomePage onChangeUsername={() => {}} onSubmitForm={submitSpy} />
      </IntlProvider>,
    );
    expect(submitSpy).not.toHaveBeenCalled();
  });

  it('should not call onSubmitForm if username is null', () => {
    const submitSpy = jest.fn();
    mount(
      <IntlProvider locale="en">
        <HomePage
          username=""
          onChangeUsername={() => {}}
          onSubmitForm={submitSpy}
        />
      </IntlProvider>,
    );
    expect(submitSpy).not.toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('onChangeUsername', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangeUsername).toBeDefined();
      });

      it('should dispatch changeUsername when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const username = 'mxstbr';
        result.onChangeUsername({ target: { value: username } });
        expect(dispatch).toHaveBeenCalledWith(changeUsername(username));
      });
    });

    describe('onSubmitForm', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onSubmitForm).toBeDefined();
      });

      it('should dispatch loadInfo when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onSubmitForm();
        expect(dispatch).toHaveBeenCalledWith(loadInfo());
      });

      it('should preventDefault if called with event', () => {
        const preventDefault = jest.fn();
        const result = mapDispatchToProps(() => {});
        const evt = { preventDefault };
        result.onSubmitForm(evt);
        expect(preventDefault).toHaveBeenCalledWith();
      });
    });
  });
});
