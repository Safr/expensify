import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage/EditExpensePage';
import expenses from '../../fixtures/expenses';
import { Button } from '../../components/ExpenseForm/ExpenseForm.style';

describe('EditExpensePage component', () => {
  let onStartEditExpense;
  let onStartRemoveExpense;
  let history;
  let wrapper;
  beforeEach(() => {
    onStartEditExpense = jest.fn();
    onStartRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    // tslint:disable-next-line:jsx-wrap-multiline
    wrapper = shallow(<EditExpensePage
      expense={expenses[0]}
      onStartEditExpense={onStartEditExpense}
      onStartRemoveExpense={onStartRemoveExpense}
      history={history}
    />);
  });
  test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('should handle onStartEditExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onStartEditExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
  });
  test('should handle onStartRemoveExpense', () => {
    const id = expenses[0].id;
    wrapper.find(Button).simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onStartRemoveExpense).toHaveBeenLastCalledWith(id);
  });
});
