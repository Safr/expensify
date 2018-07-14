import React from 'react';
import moment from 'moment';
import { DateRangePicker } from 'react-dates';
import { ExpenseListFilters } from '../../components/ExpenseListFilters/ExpenseListFilters';
import { filters, altFilters } from '../../fixtures/filters';
import { InputGroup, Select, TextInput } from '../../components/ExpenseListFilters/ExpenseListFilters.style';

describe('ExpenseListFilters component', () => {
  let onSetTextFilter;
  let onSortByAmount;
  let onSortByDate;
  let onSetStartDate;
  let onSetEndDate;
  let wrapper;

  beforeEach(() => {
    onSetTextFilter = jest.fn();
    onSortByAmount = jest.fn();
    onSortByDate = jest.fn();
    onSetStartDate = jest.fn();
    onSetEndDate = jest.fn();
    wrapper = shallow(<ExpenseListFilters
      filters={filters}
      onSetTextFilter={onSetTextFilter}
      onSortByAmount={onSortByAmount}
      onSortByDate={onSortByDate}
      onSetStartDate={onSetStartDate}
      onSetEndDate={onSetEndDate}
    />);
  });

  test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('should render ExpenseListFilters with altFilters', () => {
    wrapper.setProps({
      filters: altFilters,
    });
    expect(wrapper).toMatchSnapshot();
  });
  test('should handle text change', () => {
    const textFilter = 'bill';
    wrapper.find(TextInput).simulate('change', {
      target: { value: textFilter },
    });
    expect(onSetTextFilter).toHaveBeenLastCalledWith(textFilter);
  });
  test('should sort by date', () => {
    wrapper.setProps({
      filters: altFilters,
    });
    const value = 'date';
    wrapper.find(Select).simulate('change', {
      target: { value },
    });
    expect(onSortByDate).toHaveBeenCalled();
  });
  test('should sort by amount', () => {
    const value = 'amount';
    wrapper.find(Select).simulate('change', {
      target: { value },
    });
    expect(onSortByAmount).toHaveBeenCalled();
  });
  test('should handle date change', () => {
    const startDate = moment(0).add(4, 'years');
    const endDate = moment(0).add(8, 'years');
    wrapper.find(DateRangePicker).prop('onDatesChange')({ startDate, endDate });
    expect(onSetStartDate).toHaveBeenLastCalledWith(startDate);
    expect(onSetEndDate).toHaveBeenLastCalledWith(endDate);
  });
  test('should handle data focus change', () => {
    const focused = 'endDate';
    wrapper.find(DateRangePicker).prop('onFocusChange')(focused);
    expect(wrapper.state('calendarFocused')).toBe(focused);
  });
});

