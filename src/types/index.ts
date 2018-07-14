import { Moment } from 'moment';

export interface ExpensesI {
  id: string;
  amount: number;
  createdAt: number;
  description: string;
  note: string;
}

export interface FiltersI {
  text: string;
  sortBy: string;
  startDate: Moment;
  endDate: Moment;
}

export interface AuthI {
  uid?: string;
}

export interface AsyncI {
  loading: boolean;
  error?: string;
}

export interface FiltersI {
  text: string;
  sortBy: string;
  startDate: string;
  endDate: string;
}

export default interface StoreState {
  expenses: ExpensesI[];
  filters: FiltersI;
  auth: AuthI;
  async: AsyncI;
}

// React Router Typings

export interface RouteComponentProps<P> {
  match: match<P>;
  location: H.Location;
  history: H.History;
  staticContext?: any;
}

export interface match<P> {
  params: P;
  isExact: boolean;
  path: string;
  url: string;
}
