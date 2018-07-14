import asyncReducer from '../../reducers/async';
import { ASYNC_ACTION_START, ASYNC_ACTION_FINISH, ASYNC_ACTION_ERROR } from '../../actionTypes';

const asyncInitialState = {
  loading: false,
};

describe('Auth reducer', () => {
  test('should set loading true', () => {
    const action = { type: ASYNC_ACTION_START };
    const state = asyncReducer(asyncInitialState, action);
    expect(state.loading).toBe(true);
  });
  test('should set loading false', () => {
    const action = { type: ASYNC_ACTION_FINISH };
    const state = asyncReducer(asyncInitialState, action);
    expect(state.loading).toBe(false);
  });
  test('should set loading false with error', () => {
    const action = { type: ASYNC_ACTION_ERROR };
    const state = asyncReducer(asyncInitialState, action);
    expect(state.loading).toBe(false);
    expect(state.error).toBeTruthy();
  });
});
