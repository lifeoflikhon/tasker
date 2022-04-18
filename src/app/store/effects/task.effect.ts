import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppState } from '../app-state';
import { Store } from '@ngrx/store';
import { TaskService } from '../../services/task.service';
import {
  completeTask, completeTaskFailure, completeTaskSuccess,
  createTask, createTaskFailure, createTaskSuccess,
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

  createTask$ = createEffect(() => this.actions$.pipe(
    ofType(createTask),
    switchMap(({ task }) => this.taskService.create(task).pipe(
      map((task) => createTaskSuccess({ task })),
      catchError((error) => of(createTaskFailure({ error })))
    ) )
  ))

  completeTask$ = createEffect(() => this.actions$.pipe(
    ofType(completeTask),
    switchMap(({ task }) => this.taskService.toggleComplete(task).pipe(
      map((task) => completeTaskSuccess({ task })),
      catchError((error) => of(completeTaskFailure({ error })))
    ) )
  ))
}
