import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header/Header';
import { Button } from '../../components/Header/Header.style';

describe('Header Component', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
  test('should call startLogout on button click', () => {
    const onStartLogout = jest.fn();
    const wrapper = shallow(<Header onStartLogout={onStartLogout} />);
    wrapper.find(Button).simulate('click');
    expect(onStartLogout).toHaveBeenCalled();
  });
});
