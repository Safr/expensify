import { LOGIN, LOGOUT } from '../actionTypes';
import { AuthAction } from '../actions';
import { AuthI } from '../types';

export default (state = {}, action: AuthAction): AuthI => {
  switch (action.type) {
    case LOGIN:
      return {
        uid: action.uid,
      };
    case LOGOUT:
      return {};
    default:
      return state;
  }
};
