import { ExpensesI } from '../types';

export default (expenses: ExpensesI[]) => expenses.reduce((acc, expense) => acc + expense.amount, 0);
