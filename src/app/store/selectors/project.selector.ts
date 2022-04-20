import { AppState } from '../app-state';
import { createSelector } from '@ngrx/store';

export const selectProjects = (state: AppState) => state.projects;

export const selectAllProjects = createSelector( selectProjects, state => state.projects );
export const selectProject = createSelector( selectProjects, state => state.project );
