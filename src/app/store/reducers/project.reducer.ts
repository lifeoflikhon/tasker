import { Project, Task } from '../../entities';
import { createReducer, on } from '@ngrx/store';
import { loadProjects, loadProjectsFailure, loadProjectsSuccess } from '../actions/project.action';
import { loadPastTasksFailure, loadPastTasksSuccess } from '../actions/task.action';

export interface ProjectState {
  projects: Project[];
  error: any;
  status: 'pending' | 'success' | 'error' | 'loading';
}

export const initialProjectState: ProjectState = {
  projects: [],
  error: null,
  status: 'pending',
};

export const projectReducer = createReducer(
  initialProjectState,

  // Load Projects
  on(loadProjects, (state) => ({ ...state, status: 'loading' })),
  on(loadProjectsSuccess, ( state, { projects }) => ({ ...state, projects, status: 'success', error: null })),
  on(loadProjectsFailure, ( state, { error }) => ({ ...state, status: 'error', error })),

);
