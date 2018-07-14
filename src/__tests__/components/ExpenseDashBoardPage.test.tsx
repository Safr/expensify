import React from 'react';
import { ExpenseDashboardPage } from '../../components/ExpenseDashboardPage/ExpenseDashboardPage';

describe('ExpenseDashboard Component', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<ExpenseDashboardPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
