import moment from 'moment';
import filtersReducer from '../../reducers/filters';
import { SORT_BY_AMOUNT, SORT_BY_DATE, SET_START_DATE, SET_END_DATE, SET_TEXT_FILTER } from '../../actionTypes';

const filtersInitialState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month'),
};

describe('Filters Reducer', () => {
  test('should setup default filters state', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual(filtersInitialState);
  });
  test('should set sortBy to amount', () => {
    const action = { type: SORT_BY_AMOUNT };
    const state = filtersReducer(undefined, action);
    expect(state.sortBy).toBe('amount');
  });
  test('should set a sortBy to date', () => {
    const currentState = {
      text: '',
      sortBy: 'amount',
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month'),
    };
    const action = { type: SORT_BY_DATE };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
  });
  test('should set a text filter', () => {
    const text = 'e';
    const action = { type: SET_TEXT_FILTER, text };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(text);
  });
  test('should set a startDate filter', () => {
    const startDate = moment(0);
    const action = { type: SET_START_DATE, startDate };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toBe(startDate);
  });
  test('should set an endDate filter', () => {
    const endDate = moment(0);
    const action = { type: SET_END_DATE, endDate };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toBe(endDate);
  });
});
