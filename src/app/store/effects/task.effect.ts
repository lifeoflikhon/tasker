import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppState } from '../app-state';
import { Store } from '@ngrx/store';
import { TaskService } from '../../services/task.service';
import {
  activeTask,
  activeTaskFailure,
  activeTaskSuccess,
  blockTask,
  blockTaskFailure,
  blockTaskSuccess,
  completeTask,
  completeTaskFailure,
  completeTaskSuccess,
  createTask,
  createTaskFailure,
  createTaskSuccess,
  deleteTask,
  deleteTaskFailure,
  deleteTaskSuccess,
  duplicateTask,
  duplicateTaskFailure,
  duplicateTaskSuccess, getTaskById, getTaskByIdFailure,
  getTaskByIdSuccess,
  inactiveTask,
  inactiveTaskFailure,
  inactiveTaskSuccess,
  incompleteTask,
  incompleteTaskFailure,
  incompleteTaskSuccess,
  loadPastTasks,
  loadPastTasksFailure,
  loadPastTasksSuccess,
  loadTodayTasks,
  loadTodayTasksFailure,
  loadTodayTasksSuccess,
  loadUpcomingTasks,
  loadUpcomingTasksFailure,
  loadUpcomingTasksSuccess,
  unblockTask,
  unblockTaskFailure,
  unblockTaskSuccess
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

  duplicateTask$ = createEffect(() => this.actions$.pipe(
    ofType(duplicateTask),
    switchMap(({ task }) => this.taskService.duplicate(task).pipe(
      map((task) => duplicateTaskSuccess({ task })),
      catchError((error) => of(duplicateTaskFailure({ error })))
    ) )
  ))

  completeTask$ = createEffect(() => this.actions$.pipe(
    ofType(completeTask),
    switchMap(({ task }) => this.taskService.toggleComplete(task).pipe(
      map((task) => completeTaskSuccess({ task })),
      catchError((error) => of(completeTaskFailure({ error })))
    ) )
  ))

  incompleteTask$ = createEffect(() => this.actions$.pipe(
    ofType(incompleteTask),
    switchMap(({ task }) => this.taskService.toggleComplete(task).pipe(
      map((task) => incompleteTaskSuccess({ task })),
      catchError((error) => of(incompleteTaskFailure({ error })))
    ) )
  ))

  deleteTask$ = createEffect(() => this.actions$.pipe(
    ofType(deleteTask),
    switchMap(({ task }) => this.taskService.delete(task).pipe(
      map((task) => deleteTaskSuccess({ task })),
      catchError((error) => of(deleteTaskFailure({ error })))
    ) )
  ))

  blockTask$ = createEffect(() => this.actions$.pipe(
    ofType(blockTask),
    switchMap(({ task }) => this.taskService.toggleBlock(task).pipe(
      map((task) => blockTaskSuccess({ task })),
      catchError((error) => of(blockTaskFailure({ error })))
    ) )
  ))

  unblockTask$ = createEffect(() => this.actions$.pipe(
    ofType(unblockTask),
    switchMap(({ task }) => this.taskService.toggleBlock(task).pipe(
      map((task) => unblockTaskSuccess({ task })),
      catchError((error) => of(unblockTaskFailure({ error })))
    ) )
  ))

  activeTask$ = createEffect(() => this.actions$.pipe(
    ofType(activeTask),
    switchMap(({ task }) => this.taskService.toggleActive(task).pipe(
      map((task) => activeTaskSuccess({ task })),
      catchError((error) => of(activeTaskFailure({ error })))
    ) )
  ))

  inactiveTask$ = createEffect(() => this.actions$.pipe(
    ofType(inactiveTask),
    switchMap(({ task }) => this.taskService.toggleActive(task).pipe(
      map((task) => inactiveTaskSuccess({ task })),
      catchError((error) => of(inactiveTaskFailure({ error })))
    ) )
  ))

  getTaskById$ = createEffect(() => this.actions$.pipe(
    ofType(getTaskById),
    switchMap(({ taskId }) => this.taskService.getById(taskId).pipe(
      map((task) => getTaskByIdSuccess({ task })),
      catchError((error) => of(getTaskByIdFailure({ error })))
    ) )
  ))
}
