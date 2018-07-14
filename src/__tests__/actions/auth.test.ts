import { LOGIN, LOGOUT } from '../../actionTypes';
import { login, logout } from '../../actions';

describe('Auth Actions', () => {
  test('should setup a login action object', () => {
    const uid = 'drgdfgdfgd';
    const action = login(uid);
    expect(action).toEqual({
      type: LOGIN,
      uid,
    });
  });
  test('should setup a logout action object', () => {
    const action = logout();
    expect(action).toEqual({
      type: LOGOUT,
    });
  });
});
