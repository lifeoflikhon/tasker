import { AppState } from '../app-state';
import { createSelector } from '@ngrx/store';
import { AuthState } from '../reducers';

export const selectAuth = (state: AppState) => state.auth;

export const selectCurrentAuth = createSelector( selectAuth, (state: AuthState) => state );
