import { AppState } from '../app-state';
import { createSelector } from '@ngrx/store';
import { TaskState } from '../reducers/task.reducer';

export const selectTasks = (state: AppState) => state.tasks;

export const selectAllTasks = createSelector(
  selectTasks,
  (state: TaskState) => state.tasks
);
