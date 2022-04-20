import { createAction, props } from '@ngrx/store';

export const updateUser = createAction( '[User] Update User', props<{ user: any }>() );
export const updateUserSuccess = createAction( '[User] Update User Success', props<{ user: any }>() );
export const updateUserFailure = createAction( '[User] Update User Failure', props<{ error: any }>() );
