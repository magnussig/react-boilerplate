import { LOAD_INFO, LOAD_INFO_SUCCESS, LOAD_INFO_ERROR } from '../constants';

import { loadInfo, infoLoaded, infoLoadingError } from '../actions';

describe('App Actions', () => {
  describe('loadInfo', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_INFO,
      };

      expect(loadInfo()).toEqual(expectedResult);
    });
  });

  describe('infoLoaded', () => {
    it('should return the correct type and the passed info', () => {
      const fixture = ['Test'];
      const username = 'test';
      const expectedResult = {
        type: LOAD_INFO_SUCCESS,
        info: fixture,
        username,
      };

      expect(infoLoaded(fixture, username)).toEqual(expectedResult);
    });
  });

  describe('infoLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_INFO_ERROR,
        error: fixture,
      };

      expect(infoLoadingError(fixture)).toEqual(expectedResult);
    });
  });
});
