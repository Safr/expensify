import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage/LoginPage';
import { Button } from '../../components/ExpenseForm/ExpenseForm.style';

describe('LoginPage Component', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
  });
  test('should call startLogin on button click', () => {
    const onStartLogin = jest.fn();
    const wrapper = shallow(<LoginPage onStartLogin={onStartLogin} />);
    wrapper.find(Button).simulate('click');
    expect(onStartLogin).toHaveBeenCalled();
  });
});
