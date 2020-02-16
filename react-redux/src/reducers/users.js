import * as types from '../constants/actionTypes';

const initUsersState = [];

export default (state = initUsersState, action) => {
  switch (action.type) {
    case types.FETCH_USERS_DATA:
      return action.data;
    default:
      return state;
  }
};
