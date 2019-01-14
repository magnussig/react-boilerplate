/**
 * Tests for HomePage sagas
 */

import { put, takeLatest } from 'redux-saga/effects';

import { LOAD_INFO } from 'containers/App/constants';
import { infoLoaded, infoLoadingError } from 'containers/App/actions';

import githubData, { getInfo } from '../saga';

const username = '';

/* eslint-disable redux-saga/yield-effects */
describe('getInfo Saga', () => {
  let getInfoGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getInfoGenerator = getInfo();

    const selectDescriptor = getInfoGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = getInfoGenerator.next(username).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  /*it('should dispatch the infoLoaded action if it requests the data successfully', () => {
    const response = [
      {
        name: 'first team',
      },
      {
        name: 'second team',
      },
    ];
    const putDescriptor = getInfoGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(infoLoaded(response, username)));
  });*/

  it('should call the infoLoadingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getInfoGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(infoLoadingError(response)));
  });
});

describe('githubDataSaga Saga', () => {
  const githubDataSaga = githubData();

  it('should start task to watch for LOAD_INFO action', () => {
    const takeLatestDescriptor = githubDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_INFO, getInfo));
  });
});
