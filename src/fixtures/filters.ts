import moment from 'moment';

const filters = {
  text: '',
  sortBy: 'date', // date or amount
  startDate: undefined,
  endDate: undefined,
};

const altFilters = {
  text: 'bills',
  sortBy: 'amount', // date or amount
  startDate: moment(0),
  endDate: moment(0).add(3, 'days'),
};

export { filters, altFilters };
