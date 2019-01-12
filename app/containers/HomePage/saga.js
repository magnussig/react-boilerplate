/**
 * Gets the repositories of the user from Github
 */
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_REPOS } from 'containers/App/constants';
import {
  reposLoaded,
  repoLoadingError,
  setAllTeams,
  setAllUsers,
  setCurrTeamLead,
} from 'containers/App/actions';
import request from 'utils/request';
import { makeSelectTeam } from 'containers/App/selectors';

/**
 * Github info request/response handler
 */
export function* getRepos() {
  // Select teamId from store
  const teamId = yield select(makeSelectTeam());
  // get team members if teamId has been set
  const getTeamMembers = Number.isInteger(teamId);
  // TODO: get secrets (like URL) from .env file
  let requestURL =
    'http://tempo-test.herokuapp.com/7d1d085e-dbee-4483-aa29-ca033ccae1e4/1/team/';
  // if teamId has been set, get team, else get all teams
  if (getTeamMembers) requestURL += teamId;
  try {
    // Call our request helper (see 'utils/request')
    let info = yield call(request, requestURL);
    if (getTeamMembers) {
      const users = yield call(
        request,
        'http://tempo-test.herokuapp.com/7d1d085e-dbee-4483-aa29-ca033ccae1e4/1/user/',
      );
      yield put(setAllUsers(users));
      const usersInTeam = users.filter(u => info.members.includes(u.id));
      const teamLeader = users.find(u => info.lead === u.id);
      yield put(setCurrTeamLead(teamLeader));
      info = usersInTeam;
    } else {
      yield put(setAllTeams(info));
    }
    yield put(reposLoaded(info, ''));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_REPOS, getRepos);
}
