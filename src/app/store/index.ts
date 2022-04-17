import { reducer, TaskState } from './reducers/task.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface State {
  task: TaskState;
}

export const reducers: ActionReducerMap<State> = {
  task: reducer
};

export const getTaskState = createFeatureSelector('task');

export const getTasks = createSelector(
  getTaskState,
  (state: TaskState) => state.tasks
);
