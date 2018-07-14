import moment from 'moment';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions';
import { SET_TEXT_FILTER, SORT_BY_DATE, SET_START_DATE, SET_END_DATE, SORT_BY_AMOUNT } from '../../actionTypes';

describe('Filters Actions', () => {
  test('should setup set a text filter action object with given text', () => {
    const text = 'rent';
    const action = setTextFilter(text);
    expect(action).toEqual({
      type: SET_TEXT_FILTER,
      text,
    });
  });
  test('should setup a set text filter action object without text', () => {
    const action = setTextFilter();
    expect(action).toEqual({
      type: SET_TEXT_FILTER,
      text: '',
    });
  });
  test('should setup a sort by amount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
      type: SORT_BY_AMOUNT,
    });
  });
  test('should setup a sort by date action object', () => {
    const action = sortByDate();
    expect(action).toEqual({
      type: SORT_BY_DATE,
    });
  });
  test('should setup a set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
      type: SET_START_DATE,
      startDate: moment(0),
    });
  });
  test('should setup a set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
      type: SET_END_DATE,
      endDate: moment(0),
    });
  });
});
