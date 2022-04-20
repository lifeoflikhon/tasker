import { Project } from '../../pages/projects/models';
import { createReducer, on } from '@ngrx/store';
import {
  createProject, createProjectFailure, createProjectSuccess, deleteProject, deleteProjectFailure, deleteProjectSuccess,
  loadProject,
  loadProjectFailure,
  loadProjects,
  loadProjectsFailure,
  loadProjectsSuccess,
  loadProjectSuccess, updateProject, updateProjectFailure, updateProjectSuccess
} from '../actions';

export interface ProjectState {
  projects: Project[];
  project: Project;
  loading: boolean;
  error: any;
}

export const initialProjectState: ProjectState = {
  projects: [],
  project: null,
  loading: false,
  error: null
};

export const projectReducer = createReducer(
  initialProjectState,

  // Load Projects
  on(loadProjects, state => ({ ...state, loading: true })),
  on(loadProjectsSuccess, (state, { projects }) => ({ ...state, projects, loading: false })),
  on(loadProjectsFailure, (state, { error }) => ({ ...state, error, loading: false })),

  // Load Project
  on(loadProject, state => ({ ...state, loading: true })),
  on(loadProjectSuccess, (state, { project }) => ({ ...state, project, loading: false })),
  on(loadProjectFailure, (state, { error }) => ({ ...state, error, loading: false })),

  // Create Project
  on(createProject, (state) => ({ ...state, loading: true })),
  on(createProjectSuccess, (state, { project }) => ({ ...state, projects: [...state.projects, project], loading: false })),
  on(createProjectFailure, (state, { error }) => ({ ...state, error, loading: false })),

  // Update Project
  on(updateProject, (state) => ({ ...state, loading: true })),
  on(updateProjectSuccess, ( state, { project } ) => ({
    ...state,
    projects: state.projects.map(p => p.id === project.id ? project : p),
    loading: false
  })),
  on(updateProjectFailure, (state, { error }) => ({ ...state, error, loading: false })),

  // Delete Project
  on(deleteProject, (state) => ({ ...state, loading: true })),
  on(deleteProjectSuccess, (state, { id }) => ({
    ...state,
    projects: state.projects.filter(p => p.id !== id),
    loading: false
  })),
  on(deleteProjectFailure, (state, { error }) => ({ ...state, error, loading: false })),
);
