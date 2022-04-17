import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TaskService } from '../../services/task.service';
import { getPastTasks, getTodayTasks, getUpcomingTasks } from '../actions';
import { exhaustMap, map } from 'rxjs';

@Injectable()
export class TaskEffects {
  constructor(
    private actions$: Actions,
    private taskService: TaskService
  ) {}

  getPastTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPastTasks),
      exhaustMap(() =>
        this.taskService.getPast().pipe(
          map(tasks => getPastTasks({ tasks }))
        )
      )
    )
  );

  getTodayTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTodayTasks),
      exhaustMap(() =>
        this.taskService.getToday().pipe(
          map(tasks => getTodayTasks({ tasks }))
        )
      )
    )
  );

  getUpcomingTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUpcomingTasks),
      exhaustMap(() =>
        this.taskService.getUpcoming().pipe(
          map(tasks => getUpcomingTasks({ tasks }))
        )
      )
    )
  );
}
