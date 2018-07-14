import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import { Button } from '../ExpenseForm/ExpenseForm.style';
import { startEditExpense, startRemoveExpense } from '../../actions';
import StoreState, { ExpensesI, RouteComponentProps } from '../../types';
import PageHeader, { ButtonWrapper } from './EditExpensePage.style';

interface Props extends RouteComponentProps<any> {
  expense: ExpensesI;
  onStartEditExpense: (id: string, expense: ExpensesI) => void;
  onStartRemoveExpense: (id: string) => void;
}

export class EditExpensePage extends Component<Props, {}> {
  handleSubmit = (expense: any) => {
    this.props.onStartEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  }
  handleRemove = () => {
    const id = this.props.expense.id;
    this.props.onStartRemoveExpense(id);
    this.props.history.push('/');
  }
  render() {
    return (
      <>
        <PageHeader>
          <h1>Edit Expense</h1>
        </PageHeader>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.handleSubmit}
        />
        <ButtonWrapper>
          <Button red onClick={this.handleRemove}>
            Remove Expense
          </Button>
        </ButtonWrapper>
      </>
    );
  }
}

const mapStateToProps = (state: StoreState, ownProps: Props) => ({
  expense: state.expenses.find(expense => expense.id === ownProps.match.params.id),
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onStartEditExpense: (id: string, expense: ExpensesI) => dispatch(startEditExpense(id, expense)),
  onStartRemoveExpense: (id: string) => dispatch(startRemoveExpense(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
