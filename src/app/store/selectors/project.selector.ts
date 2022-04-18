import { AppState } from '../app-state';
import { createSelector } from '@ngrx/store';
import { TaskState } from '../reducers/task.reducer';
import { ProjectState } from '../reducers/project.reducer';

export const selectProjects = (state: AppState) => state.projects;

export const selectAllProjects = createSelector(
  selectProjects,
  (state: ProjectState) => state.projects
);
