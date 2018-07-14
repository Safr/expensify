import moment from 'moment';
import { createStore } from 'redux';
import reducer from '../../reducers';
import { logout } from '../../actions';

describe('Store', () => {
  it('should set up default state', () => {
    const store = createStore(reducer);
    store.dispatch(logout());
    const actual = store.getState();
    const expected = {
      expenses: [],
      filters: {
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
      },
      auth: { },
      async: { loading: false },
      toastr: {
        confirm: null,
        toastrs: [],
      },
    };
    expect(actual).toEqual(expected);
  });
});
