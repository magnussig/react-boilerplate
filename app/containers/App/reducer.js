/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
  LOAD_USERS_SUCCESS,
  LOAD_USERS,
  LOAD_USERS_ERROR,
  SET_ALL_TEAMS,
  SET_ALL_USERS,
  SET_CURR_TEAM_LEAD,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
  },
  teamId: null,
  users: null,
  userId: null,
  allTeams: null,
  allUsers: null,
  currTeamLead: null,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_REPOS:
      return state
        .set('loading', true)
        .set('error', false)
        .set('teamId', action.teamId)
        .setIn(['userData', 'repositories'], false);
    case LOAD_REPOS_SUCCESS:
      return state
        .setIn(['userData', 'repositories'], action.repos)
        .set('loading', false)
        .set('currentUser', action.username);
    case LOAD_REPOS_ERROR:
      return state.set('error', action.error).set('loading', false);
    case LOAD_USERS:
      return state
        .set('loading', true)
        .set('error', false)
        .set('userId', action.userId)
        .set('users', null);
    case LOAD_USERS_SUCCESS:
      return state.set('users', action.users).set('loading', false);
    case LOAD_USERS_ERROR:
      return state.set('error', action.error).set('loading', false);
    case SET_ALL_TEAMS:
      return state.set('allTeams', action.teams);
    case SET_ALL_USERS:
      return state.set('allUsers', action.users);
    case SET_CURR_TEAM_LEAD:
      return state.set('currTeamLead', action.lead);
    default:
      return state;
  }
}

export default appReducer;
