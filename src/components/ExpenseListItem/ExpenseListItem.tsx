import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import { ListItem } from './ExpenseListItem.style';
import { ExpensesI } from '../../types';

interface Props extends ExpensesI {
}

const ExpenseListItem: React.SFC<Props> = ({
  id, description, amount, createdAt,
}) => (
  <ListItem>
    <Link to={`/edit/${id}`}>
      <h3>
        <p>{description}</p>
        <span>{moment(createdAt).format('MMMM Do, YYYY')}</span>
      </h3>
      <p>{numeral(amount / 100).format('$0,0.00')}</p>
    </Link>
  </ListItem>
);

export default ExpenseListItem;
