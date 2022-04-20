import { createAction, props } from '@ngrx/store';

export const loadProjects = createAction('[Project] Load Projects');
export const loadProjectsSuccess = createAction('[Project] Load Projects Success', props<{ projects: any }>());
export const loadProjectsFailure = createAction('[Project] Load Projects Failure', props<{ error: any }>());

export const loadProject = createAction('[Project] Load Project', props<{ id: string }>());
export const loadProjectSuccess = createAction('[Project] Load Project Success', props<{ project: any }>());
export const loadProjectFailure = createAction('[Project] Load Project Failure', props<{ error: any }>());

export const createProject = createAction('[Project] Create Project', props<{ project: any }>());
export const createProjectSuccess = createAction('[Project] Create Project Success', props<{ project: any }>());
export const createProjectFailure = createAction('[Project] Create Project Failure', props<{ error: any }>());

export const updateProject = createAction('[Project] Update Project', props<{ project: any }>());
export const updateProjectSuccess = createAction('[Project] Update Project Success', props<{ project: any }>());
export const updateProjectFailure = createAction('[Project] Update Project Failure', props<{ error: any }>());

export const deleteProject = createAction('[Project] Delete Project', props<{ id: string }>());
export const deleteProjectSuccess = createAction('[Project] Delete Project Success', props<{ id: string }>());
export const deleteProjectFailure = createAction('[Project] Delete Project Failure', props<{ error: any }>());
