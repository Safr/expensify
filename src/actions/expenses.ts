import { Dispatch, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { toastr } from 'react-redux-toastr';
import database from '../firebase/firebase';
import { SET_EXPENSES, ADD_EXPENSE, EDIT_EXPENSE, REMOVE_EXPENSE } from '../actionTypes';
import { asyncActionStart, asyncActionFinish, asyncActionError } from './async';
import StoreState, { ExpensesI } from '../types';

export interface InitExpense {
  type: '@@INIT';
}

export interface AddExpense {
  type: ADD_EXPENSE;
  expense: ExpensesI;
}

export interface EditExpense {
  type: EDIT_EXPENSE;
  id: string;
  updates: any;
}

export interface RemoveExpense {
  type: REMOVE_EXPENSE;
  id: string;
}

export interface SetExpenses {
  type: SET_EXPENSES;
  expenses: ExpensesI[];
}

export type ExpenseAction = InitExpense | AddExpense | EditExpense | RemoveExpense | SetExpenses;

export const addExpense: ActionCreator<AddExpense> = expense => ({
  type: ADD_EXPENSE,
  expense,
});

export const startAddExpense = (expenseData = {}): ThunkAction<any, StoreState, null> =>
  (dispatch: Dispatch<any>, getState: () => StoreState) => {
    const { uid } = getState().auth;
    const {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0,
  }: any = expenseData;
    const expense = {
      description, note, amount, createdAt,
    };
    return database.ref(`users/${uid}/expenses`).push(expense).then(ref => {
      toastr.success('Success', 'Expense has been added');
      dispatch(addExpense({
        id: ref.key,
        ...expense,
      }));
    });
  };

export const removeExpense: ActionCreator<RemoveExpense> = (id) => ({
  type: REMOVE_EXPENSE,
  id,
});

export const startRemoveExpense = (id: string): ThunkAction<any, StoreState, null> =>
  (dispatch: Dispatch<any>, getState: () => StoreState) => {
    const { uid } = getState().auth;
    return database.ref(`users/${uid}/expenses/${id}`).remove()
    .then(() => {
      toastr.success('Success', 'Expense has been deleted');
      dispatch(removeExpense(id));
    });
  };

export const editExpense: ActionCreator<EditExpense> = (id, updates) => ({
  type: EDIT_EXPENSE,
  id,
  updates,
});

export const startEditExpense = (id: string, updates: ExpensesI): ThunkAction<any, StoreState, null> =>
  (dispatch: Dispatch<any>, getState: () => StoreState) => {
    const { uid } = getState().auth;
    return database.ref(`users/${uid}/expenses/${id}`).update(updates)
    .then(() => {
      toastr.success('Success', 'Expense has been edited');
      dispatch(editExpense(id, updates));
    });
  };

export const setExpenses: ActionCreator<SetExpenses> = expenses => ({
  type: SET_EXPENSES,
  expenses,
});

export const startSetExpenses = (): ThunkAction<any, StoreState, null> =>
  (dispatch: Dispatch<any>, getState: () => StoreState) => {
    const { uid } = getState().auth;
    dispatch(asyncActionStart());
    return database.ref(`users/${uid}/expenses`)
    .once('value')
    .then(snapshot => {
      const expenses: ExpensesI[] = [];
      snapshot.forEach((childSnapshot: any) => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val(),
        });
      });
      dispatch(setExpenses(expenses));
      toastr.success('Success', 'Expenses have been loaded');
      dispatch(asyncActionFinish());
    })
    .catch(e => dispatch(asyncActionError()));
  };
