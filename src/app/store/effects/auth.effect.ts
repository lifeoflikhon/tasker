import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { createAction, Store } from '@ngrx/store';
import { AuthService } from '../../services';
import {
  forgotPassword, forgotPasswordFailure, forgotPasswordSuccess,
  login,
  loginFailure,
  loginSuccess,
  logout,
  logoutFailure,
  logoutSuccess,
  register, registerFailure,
  registerSuccess, setAuthState, verifyEmail, verifyEmailFailure, verifyEmailSuccess
} from '../actions';
import { map, switchMap } from 'rxjs';

@Injectable()
export class AuthEffect {
  constructor(
    private actions: Actions,
    private store: Store,
    private authService: AuthService
  ) {}

  login$ = createEffect(() => this.actions.pipe(
    ofType(login),
    switchMap(({email, password}) => this.authService.signIn(email, password)
      .then(user => loginSuccess({ user }))
      .catch(error => loginFailure( { error } ))
    )
  ))

  logout$ = createEffect(() => this.actions.pipe(
    ofType(logout),
    switchMap(() => this.authService.signOut()
      .then(() => logoutSuccess())
      .catch(error => logoutFailure( { error } ))
    )
  ))

  register$ = createEffect(() => this.actions.pipe(
    ofType(register),
    switchMap(({ email, password }) => this.authService.signUp(email, password)
      .then(() => registerSuccess())
      .catch(error => registerFailure( { error } ))
    )
  ))

  resetPassword$ = createEffect(() => this.actions.pipe(
    ofType(forgotPassword),
    switchMap(({ email }) => this.authService.forgotPassword(email)
      .then(() => forgotPasswordSuccess())
      .catch(error => forgotPasswordFailure({ error }))
    )
  ))

  verifyEmail$ = createEffect(() => this.actions.pipe(
    ofType(verifyEmail),
    switchMap(() => this.authService.sendVerificationMail()
      .then(() => verifyEmailSuccess())
      .catch(error => verifyEmailFailure({ error }))
    )
  ))

  setAuthState$ = createEffect(() => this.actions.pipe(
    ofType(setAuthState)
  ))
}
