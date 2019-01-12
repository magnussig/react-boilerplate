import { LOAD_INFO, LOAD_INFO_SUCCESS, LOAD_INFO_ERROR } from '../constants';

import { loadInfo, reposLoaded, repoLoadingError } from '../actions';

describe('App Actions', () => {
  describe('loadInfo', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_INFO,
      };

      expect(loadInfo()).toEqual(expectedResult);
    });
  });

  describe('reposLoaded', () => {
    it('should return the correct type and the passed info', () => {
      const fixture = ['Test'];
      const username = 'test';
      const expectedResult = {
        type: LOAD_INFO_SUCCESS,
        info: fixture,
        username,
      };

      expect(reposLoaded(fixture, username)).toEqual(expectedResult);
    });
  });

  describe('repoLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_INFO_ERROR,
        error: fixture,
      };

      expect(repoLoadingError(fixture)).toEqual(expectedResult);
    });
  });
});
