import { createAction, props } from '@ngrx/store';
import { Task } from '../../entities';

export const loadPastTasks = createAction( '[Task] Load Past Task' );
export const loadPastTasksSuccess = createAction( '[Task] Load Past Task Success', props<{ tasks: Task[] }>() );
export const loadPastTasksFailure = createAction( '[Task] Load Past Task Failure', props<{ error: any }>() );

export const loadTodayTasks = createAction( '[Task] Load Today Task' );
export const loadTodayTasksSuccess = createAction( '[Task] Load Today Task Success', props<{ tasks: Task[] }>() );
export const loadTodayTasksFailure = createAction( '[Task] Load Today Task Failure', props<{ error: any }>() );

export const loadUpcomingTasks = createAction( '[Task] Load Upcoming Task' );
export const loadUpcomingTasksSuccess = createAction( '[Task] Load Upcoming Task Success', props<{ tasks: Task[] }>() );
export const loadUpcomingTasksFailure = createAction( '[Task] Load Upcoming Task Failure', props<{ error: any }>() );

export const createTask = createAction( '[Task] Create Task', props<{ task: Task }>() );
export const createTaskSuccess = createAction( '[Task] Create Task Success', props<{ task: Task }>() );
export const createTaskFailure = createAction( '[Task] Create Task Failure', props<{ error: any }>() );
