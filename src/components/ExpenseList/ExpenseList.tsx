import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../../selectors/expenses';
import ExpenseListItem from '../ExpenseListItem/ExpenseListItem';
import Container from '../../theme/grid';
import StoreState, { ExpensesI } from '../../types';
import { ListHeader, UlList, P } from './ExpenseList.style';

interface Props {
  expenses: ExpensesI[];
}

export const ExpenseList: React.SFC<Props> = ({ expenses }) => (
  <Container>
    <ListHeader>
      <div>Expense</div>
      <div>Amount</div>
    </ListHeader>
    <UlList>
      {
        expenses.length === 0 ?
          <P>No expenses</P>
          :
          expenses.map(expense => <ExpenseListItem key={expense.id} {...expense} />)
      }
    </UlList>
  </Container>
);

const mapStateToProps = (state: StoreState) => ({
  expenses: selectExpenses(state.expenses, state.filters),
});

export default connect(mapStateToProps)(ExpenseList);
