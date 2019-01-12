/**
 * Gets the repositories of the user from Github
 */
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_USERS } from 'containers/App/constants';
import { userLoaded, userLoadingError } from 'containers/App/actions';
import request from 'utils/request';
import { makeSelectUserId } from 'containers/App/selectors';

/**
 * Github info request/response handler
 */
export function* getUsers() {
  // Select userId from store
  const userId = yield select(makeSelectUserId());
  // TODO: get secrets (like URL) from .env file
  const requestURL = `http://tempo-test.herokuapp.com/7d1d085e-dbee-4483-aa29-ca033ccae1e4/1/user/${userId}`;
  try {
    // Call our request helper (see 'utils/request')
    const user = yield call(request, requestURL);
    yield put(userLoaded(user));
  } catch (err) {
    yield put(userLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* userData() {
  yield takeLatest(LOAD_USERS, getUsers);
}
