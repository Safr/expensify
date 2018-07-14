import uuidv4 from 'uuid/v4';
// import configureMockStore from 'redux-mock-store';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { REMOVE_EXPENSE, EDIT_EXPENSE, ADD_EXPENSE, SET_EXPENSES } from '../../actionTypes';
import { startAddExpense, startEditExpense, startRemoveExpense, startSetExpenses, addExpense,
  editExpense, removeExpense, setExpenses, asyncActionFinish, asyncActionStart } from '../../actions';
import expenses from '../../fixtures/expenses';
import database from '../../firebase/firebase';

describe('Expenses Actions', () => {
  const uid = 'thisismyfakeuid';
  const defaultAuthState = { auth: { uid } };
  // const createMockStore = configureMockStore([thunk]);
  const createMockStore = configureStore([thunk]);

  beforeEach(done => {
    const expensesData = {};
    expenses.forEach(({
      id, description, note, amount, createdAt,
    }) => {
      expensesData[id] = {
        description, note, amount, createdAt,
      };
    });
    database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
  });

  test('should setup remove an expense action object', () => {
    const id = '123abc';
    const action = removeExpense(id);
    expect(action).toEqual({
      type: REMOVE_EXPENSE,
      id: '123abc',
    });
  });
  test('should remove the expense from firebase', done => {
    expect.assertions(2);
    const store = createMockStore(defaultAuthState);
    const { id } = expenses[0];
    store.dispatch(startRemoveExpense(id))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
          type: REMOVE_EXPENSE,
          id,
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
      })
      .then(snapshot => {
        expect(snapshot.val()).toBeFalsy();
        done();
      });
  });
  test('should setup edit an expense action object', () => {
    const id = '123abc';
    const updates = { amount: 133 };
    const action = editExpense(id, updates);
    expect(action).toEqual({
      type: EDIT_EXPENSE,
      id,
      updates,
    });
  });
  test('should edit expense from firebase', done => {
    expect.assertions(2);
    const store = createMockStore(defaultAuthState);
    const { id } = expenses[0];
    const updates: any = { note: 'new edited note' };
    store.dispatch(startEditExpense(id, updates))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
          type: EDIT_EXPENSE,
          id,
          updates,
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
      })
      .then(snapshot => {
        expect(snapshot.val().note).toBe(updates.note);
        done();
      });
  });
  test('should setup add an expense action object with given values', () => {
    // const providedObj = {
    //   description: 'Rent', amount: 33, createdAt: 8888, note: 'last rent',
    // };
    const action = addExpense(expenses[0]);
    expect(action).toEqual({
      type: ADD_EXPENSE,
      expense: expenses[0],
      // expense: {
      //   ...providedObj,
      //   id: expect.any(String),
      // },
    });
  });
  // test('should setup add an expense action object with default values', () => {
  //   const action = addExpense();
  //   expect(action).toEqual({
  //     type: actionTypes.ADD_EXPENSE,
  //     expense: {
  //       id: expect.any(String),
  //       description: '',
  //       note: '',
  //       amount: 0,
  //       createdAt: 0,
  //     },
  //   });
  // });

  test('should add expense to database and store', done => {
    expect.assertions(2);
    const expenseData = {
      description: 'mouse',
      amount: 3400,
      note: 'bad',
      createdAt: 1000,
    };
    const store = createMockStore(defaultAuthState);

    store.dispatch(startAddExpense(expenseData))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
          type: ADD_EXPENSE,
          expense: {
            id: expect.any(String),
            ...expenseData,
          },
        });
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
      })
      .then(snapshot => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
      });
  });

  test('should setup set expense action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
      type: SET_EXPENSES,
      expenses,
    });
  });
  test('should fetch the expenses from firebase', done => {
    expect.assertions(4);
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetExpenses())
      .then(() => {
        const actions = store.getActions();
        expect(actions.length).toBe(3);
        expect(actions[0]).toEqual(asyncActionStart());
        expect(actions[1]).toEqual({
          type: SET_EXPENSES,
          expenses,
        });
        expect(actions[2]).toEqual(asyncActionFinish());
        done();
      });
  });
});
