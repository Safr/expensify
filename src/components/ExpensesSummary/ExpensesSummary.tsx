import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../../selectors/expenses';
import selectTotalExpenses from '../../selectors/expensesTotal';
import Container from '../../theme/grid';
import StoreState from '../../types';
import { PageHeader, StyledLink, StyledSpan } from './ExpensesSummary.style';

interface Props {
  expenseCount: number;
  expensesTotal: number;
}

export const ExpensesSummary: React.SFC<Props> = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedExpenseTotal = numeral(expensesTotal / 100).format('$0,0.00');
  return (
    <PageHeader>
      <Container>
        <h2>
      Viewing <StyledSpan>{expenseCount}</StyledSpan> {expenseWord}
          {' '} totalling <StyledSpan>{formattedExpenseTotal}</StyledSpan>
        </h2>
        <StyledLink to="/create">Add Expense</StyledLink>
      </Container>
    </PageHeader>

  );
};

const mapStateToProps = (state: StoreState) => ({
  expenseCount: selectExpenses(state.expenses, state.filters).length,
  expensesTotal: selectTotalExpenses(selectExpenses(state.expenses, state.filters)),
});

export default connect(mapStateToProps)(ExpensesSummary);
