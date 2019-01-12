/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = state => state.get('global');

const selectRouter = state => state.get('router');

const makeSelectCurrentUser = () =>
  createSelector(selectGlobal, globalState => globalState.get('currentUser'));

const makeSelectLoading = () =>
  createSelector(selectGlobal, globalState => globalState.get('loading'));

const makeSelectError = () =>
  createSelector(selectGlobal, globalState => globalState.get('error'));

const makeSelectRepos = () =>
  createSelector(selectGlobal, globalState =>
    globalState.getIn(['userData', 'repositories']),
  );

const makeSelectLocation = () =>
  createSelector(selectRouter, routerState =>
    routerState.get('location').toJS(),
  );

const makeSelectTeam = () =>
  createSelector(selectGlobal, globalState => globalState.get('teamId'));

const makeSelectUsers = () =>
  createSelector(selectGlobal, globalState => globalState.get('users'));

const makeSelectUserId = () =>
  createSelector(selectGlobal, globalState => globalState.get('userId'));

const makeSelectAllTeams = () =>
  createSelector(selectGlobal, globalState => globalState.get('allTeams'));

const makeSelectAllUsers = () =>
  createSelector(selectGlobal, globalState => globalState.get('allUsers'));

const makeSelectCurrTeamLead = () =>
  createSelector(selectGlobal, globalState => globalState.get('currTeamLead'));

export {
  selectGlobal,
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectRepos,
  makeSelectLocation,
  makeSelectTeam,
  makeSelectUsers,
  makeSelectUserId,
  makeSelectAllTeams,
  makeSelectAllUsers,
  makeSelectCurrTeamLead,
};
