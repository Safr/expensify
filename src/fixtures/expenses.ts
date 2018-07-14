import moment from 'moment';

export default [
  {
    id: '1',
    description: 'Gum',
    note: '',
    amount: 77,
    createdAt: 0,
  },
  {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 777,
    createdAt: moment(0).subtract(4, 'days').valueOf(),
  },
  {
    id: '3',
    description: 'House',
    note: '',
    amount: 7777,
    createdAt: moment(0).add(4, 'days').valueOf(),
  },
];
