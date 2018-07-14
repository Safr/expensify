import { combineReducers, Reducer } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import expenses from './expenses';
import filters from './filters';
import auth from './auth';
import async from './async';
import StoreState from '../types';

const reducer = combineReducers<StoreState>({
  expenses,
  filters,
  auth,
  async,
  toastr: toastrReducer,
});

export default reducer;
