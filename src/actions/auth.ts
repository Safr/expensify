import { Action, ActionCreator, Dispatch } from 'redux';
import { firebase, googleAuthProvider } from '../firebase/firebase';
import { LOGIN, LOGOUT } from '../actionTypes';

export interface Login extends Action {
  type: LOGIN;
  uid: string;
}

export interface Logout extends Action {
  type: LOGOUT;
}

export type AuthAction = Login | Logout;

export const login: ActionCreator<Login> = (uid: string) => ({
  type: LOGIN,
  uid,
});

export const logout: ActionCreator<Logout> = () => ({
  type: LOGOUT,
});

export const startLogin = () => (dispatch: Dispatch<any>) => firebase.auth().signInWithPopup(googleAuthProvider);

export const startLogout = () => (dispatch: Dispatch<any>) => firebase.auth().signOut();
