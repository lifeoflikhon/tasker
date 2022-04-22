import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app-state';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProjectService } from '../../pages/projects/services/project.service';
import {
  createProject, createProjectFailure, createProjectSuccess,
  loadProject,
  loadProjectFailure,
  loadProjects,
  loadProjectsFailure,
  loadProjectsSuccess,
  loadProjectSuccess
} from '../actions';
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable()
export class ProjectEffect {
  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
    private projectService: ProjectService
  ) {
  }

  loadProjects$ = createEffect(() => this.actions$.pipe(
    ofType(loadProjects),
    switchMap(() => this.projectService.load().pipe(
      map(projects => loadProjectsSuccess({ projects })),
      catchError((error) => of(loadProjectsFailure({ error })))
    ))
  ))

  loadProject$ = createEffect(() => this.actions$.pipe(
    ofType(loadProject),
    switchMap(({ id }) => this.projectService.getById(id).pipe(
      map(project => loadProjectSuccess({ project })),
      catchError((error) => of(loadProjectFailure({ error })))
    ))
  ))

  createProject$ = createEffect(() => this.actions$.pipe(
    ofType(createProject),
    switchMap(({ project }) => this.projectService.save(project).pipe(
      map(project => createProjectSuccess({ project })),
      catchError((error) => of(createProjectFailure({ error })))
    ))
  ))
}
