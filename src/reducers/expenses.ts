import { SET_EXPENSES, ADD_EXPENSE, EDIT_EXPENSE, REMOVE_EXPENSE } from '../actionTypes';
import { ExpenseAction } from '../actions';
import { ExpensesI } from '../types';

const expensesReducer = (state = [], action: ExpenseAction): ExpensesI | ExpensesI[] => {
  switch (action.type) {
    case SET_EXPENSES:
      return [...action.expenses];
    case ADD_EXPENSE:
      return [
        ...state,
        action.expense,
      ];
    case REMOVE_EXPENSE:
      return state.filter(({ id }: {id: string}) => id !== action.id);
    case EDIT_EXPENSE:
      return state.map(expense => (
        expense.id === action.id ? { ...expense, ...action.updates } : expense));
    default:
      return state;
  }
};

export default expensesReducer;

