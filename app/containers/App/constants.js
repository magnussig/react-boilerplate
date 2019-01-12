/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_USERS_SUCCESS = 'boilerplate/App/LOAD_USERS_SUCCESS';
export const LOAD_USERS_ERROR = 'boilerplate/App/LOAD_USERS_ERROR';
export const LOAD_USERS = 'boilerplate/App/LOAD_USERS';
export const LOAD_INFO = 'boilerplate/App/LOAD_INFO';
export const LOAD_INFO_SUCCESS = 'boilerplate/App/LOAD_INFO_SUCCESS';
export const LOAD_INFO_ERROR = 'boilerplate/App/LOAD_INFO_ERROR';
export const SET_ALL_TEAMS = 'boilerplate/App/SET_ALL_TEAMS';
export const SET_ALL_USERS = 'boilerplate/App/SET_ALL_USERS';
export const SET_CURR_TEAM_LEAD = 'boilerplate/App/SET_CURR_TEAM_LEAD';
export const CHANGE_USERNAME = 'boilerplate/App/CHANGE_USERNAME';
