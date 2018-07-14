import { ActionCreator } from 'redux';
import { SET_TEXT_FILTER, SET_START_DATE, SET_END_DATE, SORT_BY_AMOUNT, SORT_BY_DATE } from '../actionTypes';
import { Moment } from 'moment';

export interface InitFilters {
  type: '@@INIT';
}

export interface SetTextFilter {
  type: SET_TEXT_FILTER;
  text: string;
}

export interface SortByAmount {
  type: SORT_BY_AMOUNT;
}

export interface SortByDate {
  type: SORT_BY_DATE;
}

export interface SetStartDate {
  type: SET_START_DATE;
  startDate: Moment;
}

export interface SetEndDate {
  type: SET_END_DATE;
  endDate: Moment;
}

export type FiltersAction = InitFilters | SetTextFilter | SortByAmount | SortByDate | SetStartDate | SetEndDate;

export const setTextFilter: ActionCreator<SetTextFilter> = (text = '') => ({
  type: SET_TEXT_FILTER,
  text,
});

export const sortByAmount: ActionCreator<SortByAmount> = () => ({
  type: SORT_BY_AMOUNT,
});

export const sortByDate: ActionCreator<SortByDate> = () => ({
  type: SORT_BY_DATE,
});

export const setStartDate: ActionCreator<SetStartDate> = (startDate: Moment) => ({
  type: SET_START_DATE,
  startDate,
});

export const setEndDate: ActionCreator<SetEndDate> = (endDate: Moment) => ({
  type: SET_END_DATE,
  endDate,
});
