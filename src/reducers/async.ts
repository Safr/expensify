import { ASYNC_ACTION_START, ASYNC_ACTION_FINISH, ASYNC_ACTION_ERROR } from '../actionTypes';
import { AsyncAction } from '../actions';
import { AsyncI } from '../types';

const initialState = {
  loading: false,
};

export default (state = initialState, action: AsyncAction): AsyncI => {
  switch (action.type) {
    case ASYNC_ACTION_START:
      return { ...state, loading: true };
    case ASYNC_ACTION_FINISH:
      return { ...state, loading: false };
    case ASYNC_ACTION_ERROR:
      return { ...state, loading: false, error: 'Network error' };
    default:
      return state;
  }
};
