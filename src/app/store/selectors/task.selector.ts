import { AppState } from '../app-state';
import { createSelector } from '@ngrx/store';
import { TaskState } from '../reducers';

export const selectTasks = (state: AppState) => state.tasks;

export const selectAllTasks = createSelector( selectTasks, (state: TaskState) => state.tasks );
export const selectTask = createSelector( selectTasks, (state: TaskState) => state.task );
