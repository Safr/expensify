import expenses from '../../fixtures/expenses';
import setExpensesTotal from '../../selectors/expensesTotal';

describe('ExpensesTotal Selector', () => {
  test('should return 0 if no expenses', () => {
    expect(setExpensesTotal([])).toBe(0);
  });
  test('should correctly add up a single expense', () => {
    expect(setExpensesTotal([expenses[0]])).toBe(expenses[0].amount);
  });
  test('should correctly add up multiple expenses', () => {
    expect(setExpensesTotal(expenses)).toBe(8631); // 8631 is taken from fixtures
  });
});
