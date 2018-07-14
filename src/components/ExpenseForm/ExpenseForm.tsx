import React, { Component, ChangeEvent, FormEvent } from 'react';
import moment, { Moment } from 'moment';
import { SingleDatePicker } from 'react-dates';
import { ExpensesI } from '../../types';
import { Button, InputGroup, TextArea, TextInput, Paragraph } from './ExpenseForm.style';

interface Props {
  expense?: ExpensesI;
  onSubmit: (expense: object) => void;
}

interface State {
  description: string;
  note: string;
  amount: number | string;
  createdAt: Moment;
  calendarFocused: boolean;
  error: string;
}

class ExpenseForm extends Component<Props, State> {
  state = {
    description: this.props.expense ? this.props.expense.description : '',
    note: this.props.expense ? this.props.expense.note : '',
    amount: this.props.expense ? (this.props.expense.amount / 100).toString() : '',
    createdAt: this.props.expense ? moment(this.props.expense.createdAt) : moment(),
    calendarFocused: false,
    error: '',
  };

  handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  }

  handleNoteChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  }

  handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  }

  handleDateChange = (createdAt: Moment) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  }

  handleFocusChange = ({ focused }: {focused: boolean}) => {
    this.setState(() => ({ calendarFocused: focused }));
  }

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please, provide description and amount' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note,
      });
    }
  }

  render() {
    return (
      <InputGroup onSubmit={this.handleSubmit}>
        {this.state.error && <Paragraph>{this.state.error}</Paragraph>}
        <TextInput
          type="text"
          placeholder="Description"
          value={this.state.description}
          onChange={this.handleDescriptionChange}
        />
        <TextInput
          type="text"
          placeholder="Amount"
          value={this.state.amount}
          onChange={this.handleAmountChange}
        />
        <SingleDatePicker
          date={this.state.createdAt}
          focused={this.state.calendarFocused}
          numberOfMonths={1}
          // tslint:disable-next-line:jsx-no-lambda
          isOutsideRange={() => false}
          onDateChange={this.handleDateChange}
          onFocusChange={this.handleFocusChange}
        />
        <TextArea
          placeholder="Add a note for your expense (optional)"
          value={this.state.note}
          onChange={this.handleNoteChange}
        />
        <Button>Save Expense</Button>
      </InputGroup>
    );
  }
}

export default ExpenseForm;
