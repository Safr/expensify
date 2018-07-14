import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseList from '../ExpenseList/ExpenseList';
import ExpensesSummary from '../ExpensesSummary/ExpensesSummary';
import ExpenseListFilters from '../ExpenseListFilters/ExpenseListFilters';
import LoadingPage from '../LoadingPage/LoadingPage';
import StoreState from '../../types';

interface Props {
  loading: boolean;
}

export class ExpenseDashboardPage extends Component<Props, {}> {
  render() {
    return (
     <>
      {this.props.loading ?
         <LoadingPage />
       :
      (<>
        <ExpensesSummary />
        <ExpenseListFilters />
        <ExpenseList />
        </>
      )}
      </>
    );
  }
}

const mapStateToProps = (state: StoreState) => ({
  loading: state.async.loading,
});

export default connect(mapStateToProps)(ExpenseDashboardPage);
