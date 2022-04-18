import { createAction, props } from '@ngrx/store';
import { Project, Task } from '../../entities';

export const loadProjects = createAction( '[Task] Load Project' );
export const loadProjectsSuccess = createAction( '[Task] Load Project Success', props<{ projects: Project[] }>() );
export const loadProjectsFailure = createAction( '[Task] Load Project Failure', props<{ error: any }>() );
