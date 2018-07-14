import { Action, ActionCreator } from 'redux';
import { ASYNC_ACTION_ERROR, ASYNC_ACTION_FINISH, ASYNC_ACTION_START } from '../actionTypes';

export interface AsyncActionStart extends Action {
  type: ASYNC_ACTION_START;
}

export interface AsyncActionFinish extends Action {
  type: ASYNC_ACTION_FINISH;
}

export interface AsyncActionError extends Action {
  type: ASYNC_ACTION_ERROR;
}

export type AsyncAction = AsyncActionStart | AsyncActionFinish | AsyncActionError;

export const asyncActionStart: ActionCreator<AsyncActionStart> = () => {
  return {
    type: ASYNC_ACTION_START,
  };
};

export const asyncActionFinish: ActionCreator<AsyncActionFinish> = () => {
  return {
    type: ASYNC_ACTION_FINISH,
  };
};

export const asyncActionError: ActionCreator<AsyncActionError> = () => {
  return {
    type: ASYNC_ACTION_ERROR,
  };
};
