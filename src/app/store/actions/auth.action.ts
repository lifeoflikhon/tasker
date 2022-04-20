import { createAction, props } from '@ngrx/store';

export const login = createAction('[Auth] Login', props<{ payload: any }>());
export const loginSuccess = createAction('[Auth] Login Success', props<{ payload: any }>());
export const loginFailure = createAction('[Auth] Login Failure', props<{ error: any }>());

export const logout = createAction('[Auth] Logout');

export const register = createAction('[Auth] Register', props<{ payload: any }>());
export const registerSuccess = createAction('[Auth] Register Success', props<{ payload: any }>());
export const registerFailure = createAction('[Auth] Register Failure', props<{ error: any }>());
