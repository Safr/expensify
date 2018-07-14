import React from 'react';
import { AddExpensePage } from '../../components/AddExpensePage/AddExpensePage';
import expenses from '../../fixtures/expenses';
import { shallow } from 'enzyme';

describe('AddExpensePage component', () => {
  let onStartAddExpense;
  let history;
  let wrapper;
  beforeEach(() => {
    onStartAddExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage onStartAddExpense={onStartAddExpense} history={history} />);
  });
  test('should render AddExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('should handle onStartAddExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onStartAddExpense).toHaveBeenLastCalledWith(expenses[0]);
  });
});
