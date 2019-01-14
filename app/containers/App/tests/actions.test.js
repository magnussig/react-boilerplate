import {
  LOAD_INFO,
  LOAD_INFO_SUCCESS,
  LOAD_INFO_ERROR,
  LOAD_USERS,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_ERROR,
  SET_ALL_TEAMS,
  SET_ALL_USERS,
  SET_CURR_TEAM_LEAD,
  CHANGE_USERNAME,
} from '../constants';

import {
  loadInfo,
  infoLoaded,
  infoLoadingError,
  loadUsers,
  userLoaded,
  userLoadingError,
  setAllTeams,
  setAllUsers,
  setCurrTeamLead,
  changeUsername,
} from '../actions';

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

  describe('loadUsers', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_USERS,
      };

      expect(loadUsers()).toEqual(expectedResult);
    });
  });

  describe('userLoaded', () => {
    it('should return the correct type and the passed info', () => {
      const fixture = ['Test'];
      const username = 'test';
      const expectedResult = {
        type: LOAD_USERS_SUCCESS,
        users: fixture,
      };

      expect(userLoaded(fixture)).toEqual(expectedResult);
    });
  });

  describe('userLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_USERS_ERROR,
        error: fixture,
      };

      expect(userLoadingError(fixture)).toEqual(expectedResult);
    });
  });

  describe('setAllTeams', () => {
    it('should return the correct type and the passed info', () => {
      const fixture = ['Test'];
      const username = 'test';
      const expectedResult = {
        type: SET_ALL_TEAMS,
        teams: fixture,
      };

      expect(setAllTeams(fixture)).toEqual(expectedResult);
    });
  });

  describe('setAllUsers', () => {
    it('should return the correct type and the passed info', () => {
      const fixture = ['Test'];
      const username = 'test';
      const expectedResult = {
        type: SET_ALL_USERS,
        users: fixture,
      };

      expect(setAllUsers(fixture)).toEqual(expectedResult);
    });


    describe('setCurrTeamLead', () => {
      it('should return the correct type and the passed info', () => {
        const fixture = 'ya boi';
        const expectedResult = {
          type: SET_CURR_TEAM_LEAD,
          lead: fixture,
        };

        expect(setCurrTeamLead(fixture)).toEqual(expectedResult);
      });
    });

    describe('changeUsername', () => {
      it('should return the correct type and the passed info', () => {
        const fixture = 'ya boi';
        const expectedResult = {
          type: CHANGE_USERNAME,
          username: fixture,
        };

        expect(changeUsername(fixture)).toEqual(expectedResult);
      });
    });


  });
});
