import { ASYNC_ACTION_START, ASYNC_ACTION_FINISH, ASYNC_ACTION_ERROR } from '../../actionTypes';
import { asyncActionStart, asyncActionFinish, asyncActionError } from '../../actions';

describe('Async Actions', () => {
  test('should start async action', () => {
    const action = asyncActionStart();
    expect(action).toEqual({
      type: ASYNC_ACTION_START,
    });
  });
  test('should end async action', () => {
    const action = asyncActionFinish();
    expect(action).toEqual({
      type: ASYNC_ACTION_FINISH,
    });
  });
  test('should end async action with error', () => {
    const action = asyncActionError();
    expect(action).toEqual({
      type: ASYNC_ACTION_ERROR,
    });
  });
});
