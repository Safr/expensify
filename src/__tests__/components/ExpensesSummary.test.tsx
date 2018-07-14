import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary/ExpensesSummary';

describe('ExpensesSummary Component', () => {
  test('should render ExpensesSummary correctly with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={222} />);
    expect(wrapper).toMatchSnapshot();
  });
  test('should render ExpensesSummary correctly with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={33} expensesTotal={22222222} />);
    expect(wrapper).toMatchSnapshot();
  });
});
