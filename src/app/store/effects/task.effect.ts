import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TaskService } from '../../pages/tasks/services/task.service';
import { Store } from '@ngrx/store';
import { AppState } from '../app-state';
import {
  createTask, createTaskFailure,
  createTaskSuccess, deleteTask, deleteTaskFailure, deleteTaskSuccess,
  loadTask,
  loadTaskFailure,
  loadTasks,
  loadTasksFailure,
  loadTasksSuccess,
  loadTaskSuccess,
  updateTask, updateTaskFailure, updateTaskSuccess
} from '../actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class TaskEffect {
  constructor(
    private actions$: Actions,
    private taskService: TaskService,
    private store: Store<AppState>
  ) {
  }

  loadTasks$ = createEffect(() => this.actions$.pipe(
    ofType(loadTasks),
    switchMap(() => this.taskService.loadTasks().pipe(
      map(tasks => loadTasksSuccess({ tasks })),
      catchError(error => of(loadTasksFailure({ error })))
    ))
  ))

  loadTask$ = createEffect(() => this.actions$.pipe(
    ofType(loadTask),
    switchMap(({ id }) => this.taskService.getById(id).pipe(
      map(task => loadTaskSuccess({ task })),
      catchError(error => of(loadTaskFailure({ error })))
    ))
  ))

  updateTask$ = createEffect(() => this.actions$.pipe(
    ofType(updateTask),
    switchMap(( {task} ) => this.taskService.saveTask(task).pipe(
      map(task => updateTaskSuccess({ task })),
      catchError(error => of(updateTaskFailure({ error })))
    ))
  ))

  createTask$ = createEffect(() => this.actions$.pipe(
    ofType(createTask),
    switchMap(({ task }) => this.taskService.saveTask(task).pipe(
      map(task => createTaskSuccess({ task })),
      catchError(error => of(createTaskFailure({ error })))
    ))
  ))

  deleteTask$ = createEffect(() => this.actions$.pipe(
    ofType(deleteTask),
    switchMap(({ id }) => this.taskService.deleteTask(id).pipe(
      map(id => deleteTaskSuccess({ id })),
      catchError(error => of(deleteTaskFailure({ error })))
    ))
  ))
}
