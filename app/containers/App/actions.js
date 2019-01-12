/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

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
  CHANGE_USERNAME,
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadRepos(teamId) {
  return {
    type: LOAD_REPOS,
    teamId,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function reposLoaded(repos, username) {
  return {
    type: LOAD_REPOS_SUCCESS,
    repos,
    username,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function repoLoadingError(error) {
  return {
    type: LOAD_REPOS_ERROR,
    error,
  };
}

export function loadUsers(userId) {
  return {
    type: LOAD_USERS,
    userId,
  };
}

export function userLoaded(users) {
  return {
    type: LOAD_USERS_SUCCESS,
    users,
  };
}

export function userLoadingError(error) {
  return {
    type: LOAD_USERS_ERROR,
    error,
  };
}

export function setAllTeams(teams) {
  return {
    type: SET_ALL_TEAMS,
    teams,
  };
}

export function setAllUsers(users) {
  return {
    type: SET_ALL_USERS,
    users,
  };
}

export function setCurrTeamLead(lead) {
  return {
    type: SET_CURR_TEAM_LEAD,
    lead,
  };
}

export function changeUsername(username) {
  return {
    type: CHANGE_USERNAME,
    username,
  };
}
