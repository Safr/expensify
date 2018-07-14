import React, { Component, ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Moment } from 'moment';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate, FiltersAction } from '../../actions';
import StoreState, { FiltersI } from '../../types';
import { InputGroup, InputGroupItem, Select, TextInput } from './ExpenseListFilters.style';

interface Props {
  filters: FiltersI;
  onSetTextFilter: (text: string) => void;
  onSortByAmount: () => void;
  onSortByDate: () => void;
  onSetStartDate: (startDate: Moment) => void;
  onSetEndDate: (endDate: Moment) => void;
}

interface State {
  calendarFocused: null | boolean;
}
export class ExpenseListFilters extends Component<Props, State> {
  state = {
    calendarFocused: null,
  };

  handleDatesChange = ({ startDate, endDate }: {startDate: Moment, endDate: Moment}) => {
    this.props.onSetStartDate(startDate);
    this.props.onSetEndDate(endDate);
  }

  handleFocusChange = (calendarFocused: boolean) => this.setState({ calendarFocused });

  handleTextChange = (e: ChangeEvent<HTMLInputElement>) => this.props.onSetTextFilter(e.target.value);

  handleSortChange = (e: ChangeEvent<HTMLInputElement>) => (
    e.target.value === 'date' ? this.props.onSortByDate() : this.props.onSortByAmount()
  )
  render() {
    const { calendarFocused } = this.state;
    const { filters } = this.props;
    return (
      <InputGroup>
        <InputGroupItem>
          <TextInput
            type="text"
            value={filters.text}
            onChange={this.handleTextChange}
          />
        </InputGroupItem>
        <InputGroupItem>
          <Select
            value={filters.sortBy}
            onChange={this.handleSortChange}
          >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </Select>
        </InputGroupItem>
        <InputGroupItem>
          <DateRangePicker
            startDate={filters.startDate}
            startDateId="startId"
            endDate={filters.endDate}
            endDateId="endId"
            onDatesChange={this.handleDatesChange}
            focusedInput={calendarFocused}
            onFocusChange={this.handleFocusChange}
            numberOfMonths={1}
            // tslint:disable-next-line:jsx-no-lambda
            isOutsideRange={() => false}
            showClearDates
          />
        </InputGroupItem>
      </InputGroup>
    );
  }
}

const mapStateToProps = (state: StoreState) => ({
  filters: state.filters,
});

const mapDispatchToProps = (dispatch: Dispatch<FiltersAction>) => ({
  onSetTextFilter: (text: string) => dispatch(setTextFilter(text)),
  onSortByAmount: () => dispatch(sortByAmount()),
  onSortByDate: () => dispatch(sortByDate()),
  onSetStartDate: (startDate: Moment) => dispatch(setStartDate(startDate)),
  onSetEndDate: (endDate: Moment) => dispatch(setEndDate(endDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
