import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from '../app-state';
import { TaskService } from '../../services/task.service';
import { ProjectService } from '../../services/project.service';
import { loadPastTasks, loadPastTasksFailure, loadPastTasksSuccess } from '../actions/task.action';
import { catchError, map, of, switchMap } from 'rxjs';
import { loadProjects, loadProjectsFailure, loadProjectsSuccess } from '../actions/project.action';

@Injectable()
export class ProjectEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private projectService: ProjectService
  ) {}

  loadProjects$ = createEffect(() => this.actions$.pipe(
    ofType(loadProjects),
    switchMap(() => this.projectService.getAll().pipe(
      map(projects => loadProjectsSuccess({ projects })),
      catchError((error) => of(loadProjectsFailure({ error })))
    ))
  ))
}
