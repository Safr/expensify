import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList/ExpenseList';
import expenses from '../../fixtures/expenses';

describe('ExpenseList Component', () => {
  test('should render ExpenseList correctly with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
  });
  test('should render ExpenseList with empty message', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
