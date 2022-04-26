import { createReducer, on } from '@ngrx/store';
import {
  forgotPassword, forgotPasswordFailure, forgotPasswordSuccess,
  login,
  loginFailure,
  loginSuccess,
  logout,
  logoutFailure,
  logoutSuccess,
  register, registerFailure,
  registerSuccess, verifyEmail, verifyEmailFailure, verifyEmailSuccess
} from '../actions';
import { User } from '../../models';

export interface AuthState {
  isLoggedIn: boolean;
  user: User;
  loading: boolean;
  error: any;
}

export const initialAuthState: AuthState = {
  isLoggedIn: false,
  user: null,
  loading: false,
  error: null
};

export const authReducer = createReducer(
  initialAuthState,

  on(login, (state) => ({ ...state, loading: true })),
  on(loginSuccess, (state) => ({ ...state, isLoggedIn: true, loading: false })),
  on(loginFailure, (state) => ({ ...state, isLoggedIn: false, loading: false })),

  on(logout, (state) => ({ ...state, loading: true })),
  on(logoutSuccess, (state) => ({ ...state, isLoggedIn: false, loading: false })),
  on(logoutFailure, (state) => ({ ...state, loading: false })),

  on(register, (state) => ({ ...state, loading: true })),
  on(registerSuccess, (state) => ({ ...state, loading: false })),
  on(registerFailure, (state) => ({ ...state, loading: false })),

  on(forgotPassword, (state) => ({ ...state, loading: true })),
  on(forgotPasswordSuccess, (state) => ({ ...state, loading: false })),
  on(forgotPasswordFailure, (state) => ({ ...state, loading: false })),

  on(verifyEmail, (state) => ({ ...state, loading: true })),
  on(verifyEmailSuccess, (state) => ({ ...state, loading: false })),
  on(verifyEmailFailure, (state) => ({ ...state, loading: false })),
);
