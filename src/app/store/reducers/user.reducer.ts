import { createReducer, on } from '@ngrx/store';
import { updateUser, updateUserFailure, updateUserSuccess } from '../actions';

export interface UserState {
  user: any;
  loading: boolean;
  error: any;
}

export const initialUserState: UserState = {
  user: null,
  loading: false,
  error: null
};

export const userReducer = createReducer(
  initialUserState,

  // Update User
  on(updateUser, (state, { user }) => ({ ...state, user, loading: true })),
  on(updateUserSuccess, (state, { user }) => ({ ...state, user, loading: false })),
  on(updateUserFailure, (state, { error }) => ({ ...state, error, loading: false }))
);
