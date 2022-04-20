import { createReducer, on } from '@ngrx/store';
import { login } from '../actions';

export interface AuthState {
  token: string;
  user: any;
  loading: boolean;
  error: any;
}

export const initialAuthState: AuthState = {
  token: null,
  user: null,
  loading: false,
  error: null
};

export const authReducer = createReducer(
  initialAuthState
);
