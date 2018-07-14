import moment from 'moment';
import expenses from '../../fixtures/expenses';
import expensesReducer from '../../reducers/expenses';
import { REMOVE_EXPENSE, SET_EXPENSES, EDIT_EXPENSE, ADD_EXPENSE } from '../../actionTypes';

describe('Expenses Reducer', () => {
  test('should setup default expenses state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
  });
  test('should remove an expense by id', () => {
    const action = { type: REMOVE_EXPENSE, id: expenses[0].id };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
      expenses[1],
      expenses[2],
    ]);
  });
  test('should not remove expenses if id not found', () => {
    const action = { type: REMOVE_EXPENSE, id: '-1' };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
  });
  test('should add an expense', () => {
    const newExpense = {
      id: 4,
      description: 'Chew',
      note: '',
      amount: 337,
      createdAt: 0,
    };
    const action = { type: ADD_EXPENSE, expense: newExpense };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, newExpense]);
  });
  test('should edit an expense', () => {
    const note = 'editing an expense';
    const action = {
      type: EDIT_EXPENSE,
      id: expenses[0].id,
      updates: { note },
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].note).toBe(note);
  });
  test('should not edit an expense if expense not found', () => {
    const note = 'editing an expense';
    const action = {
      type: EDIT_EXPENSE,
      id: '-1',
      updates: { note },
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
  });
  test('should set expenses', () => {
    const action = {
      type: SET_EXPENSES,
      expenses: [expenses[0]],
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0]]);
  });
});
