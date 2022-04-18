import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppState } from '../app-state';
import { Store } from '@ngrx/store';
import { TaskService } from '../../services/task.service';
import {
  loadPastTasks,
  loadPastTasksFailure,
  loadPastTasksSuccess,
  loadTodayTasks, loadTodayTasksFailure,
  loadTodayTasksSuccess, loadUpcomingTasks, loadUpcomingTasksFailure, loadUpcomingTasksSuccess
} from '../actions/task.action';
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable()
export class TaskEffect {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private taskService: TaskService
  ) {}

  loadPastTasks$ = createEffect(() => this.actions$.pipe(
    ofType(loadPastTasks),
    switchMap(() => this.taskService.getPast().pipe(
      map(tasks => loadPastTasksSuccess({ tasks })),
      catchError((error) => of(loadPastTasksFailure({ error })))
    ))
  ))

  loadTodayTasks$ = createEffect(() => this.actions$.pipe(
    ofType(loadTodayTasks),
    switchMap(() => this.taskService.getToday().pipe(
      map(tasks => loadTodayTasksSuccess({ tasks })),
      catchError((error) => of(loadTodayTasksFailure({ error })))
    ))
  ))

  loadUpcomingTasks$ = createEffect(() => this.actions$.pipe(
    ofType(loadUpcomingTasks),
    switchMap(() => this.taskService.getUpcoming().pipe(
      map(tasks => loadUpcomingTasksSuccess({ tasks })),
      catchError((error) => of(loadUpcomingTasksFailure({ error })))
    ))
  ))
}