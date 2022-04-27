import { createAction, props } from '@ngrx/store';

export const login = createAction('[Auth] Login', props<{ email: string, password: string }>());
export const loginSuccess = createAction('[Auth] Login Success', props<{ user: any }>());
export const loginFailure = createAction('[Auth] Login Failure', props<{ error: any }>());

export const logout = createAction('[Auth] Logout');
export const logoutSuccess = createAction('[Auth] Logout');
export const logoutFailure = createAction('[Auth] Logout', props<{ error: any }>());

export const register = createAction('[Auth] Register', props<{ email: string, password: string }>());
export const registerSuccess = createAction('[Auth] Register Success');
export const registerFailure = createAction('[Auth] Register Failure', props<{ error: any }>());

export const forgotPassword = createAction('[Auth] Forgot Password', props<{ email: string }>());
export const forgotPasswordSuccess = createAction('[Auth] Forgot Password Success');
export const forgotPasswordFailure = createAction('[Auth] Forgot Password Failure', props<{ error: any }>());

export const verifyEmail = createAction('[Auth] Verify Email');
export const verifyEmailSuccess = createAction('[Auth] Verify Email Success');
export const verifyEmailFailure = createAction('[Auth] Verify Email Failure', props<{ error: any }>());

export const setAuthState = createAction('[Auth] Set Auth State', props<{ user: any, isLoggedIn: boolean }>());
