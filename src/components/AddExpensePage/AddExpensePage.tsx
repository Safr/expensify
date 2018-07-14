import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import { startAddExpense } from '../../actions';
import { ExpensesI, RouteComponentProps } from '../../types';
import PageHeader from './AddExpensePage.style';

interface Props extends RouteComponentProps<any> {
  onStartAddExpense: (expense: ExpensesI) => void;
}

export class AddExpensePage extends Component<Props> {
  handleSubmit = (expense: any) => {
    this.props.onStartAddExpense(expense);
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <PageHeader>
          <h1>Add Expense</h1>
        </PageHeader>
        <ExpenseForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onStartAddExpense: (expense: ExpensesI) => dispatch(startAddExpense(expense)),
});

export default connect(null, mapDispatchToProps)(AddExpensePage);
