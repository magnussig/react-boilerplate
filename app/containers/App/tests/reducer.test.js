import { fromJS } from 'immutable';

import appReducer from '../reducer';
import { loadInfo, infoLoaded, infoLoadingError } from '../actions';

describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
      currentUser: false,
      userId: null,
      allUsers: null,
      users: null,
      currTeamLead: null,
      allTeams: null,
      teamId: null,
      username: '',
      userData: fromJS({
        repositories: false,
      }),
      info: null,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  /*it('should handle the loadInfo action correctly', () => {
    const expectedResult = state
      .set('loading', true)
      .set('error', false)
      .setIn(['userData', 'repositories'], false);

    expect(appReducer(state, loadInfo())).toEqual(expectedResult);
  });

  it('should handle the infoLoaded action correctly', () => {
    const fixture = [
      {
        name: 'My Repo',
      },
    ];
    const username = 'test';
    const expectedResult = state
      .setIn(['userData', 'repositories'], fixture)
      .set('loading', false)
      .set('currentUser', username);

    expect(appReducer(state, infoLoaded(fixture, username))).toEqual(
      expectedResult,
    );
  });*/

  it('should handle the infoLoadingError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = state.set('error', fixture).set('loading', false);

    expect(appReducer(state, infoLoadingError(fixture))).toEqual(
      expectedResult,
    );
  });
});
