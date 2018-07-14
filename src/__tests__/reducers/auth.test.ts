import authReducer from '../../reducers/auth';
import { LOGOUT, LOGIN } from '../../actionTypes';

const authInitialState = {};

describe('Auth reducer', () => {
  test('should set uid for login', () => {
    const action = { type: LOGIN, uid: 'wrisdldkfsld' };
    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid);
  });
  test('should clear uid for logout', () => {
    const action = { type: LOGOUT };
    const state = authReducer({ uid: 'sfsrfse' }, action);
    expect(state).toEqual(authInitialState);
  });
});
