import { createAction, props } from '@ngrx/store';
import { Task } from '../../pages/tasks/models';

export const loadTasks = createAction('[Task] Load Tasks');
export const loadTasksSuccess = createAction( '[Task] Load Tasks Success', props<{ tasks: Task[] }>() );
export const loadTasksFailure = createAction( '[Task] Load Tasks Failure', props<{ error: any }>() );

export const loadTask = createAction('[Task] Load Task', props<{ id: string }>() );
export const loadTaskSuccess = createAction( '[Task] Load Task Success', props<{ task: Task }>() );
export const loadTaskFailure = createAction( '[Task] Load Task Failure', props<{ error: any }>() );

export const createTask = createAction('[Task] Create Task', props<{ task: Task }>() );
export const createTaskSuccess = createAction( '[Task] Create Task Success', props<{ task: Task }>() );
export const createTaskFailure = createAction( '[Task] Create Task Failure', props<{ error: any }>() );

export const updateTask = createAction('[Task] Update Task', props<{ task: Task }>() );
export const updateTaskSuccess = createAction( '[Task] Update Task Success', props<{ task: Task }>() );
export const updateTaskFailure = createAction( '[Task] Update Task Failure', props<{ error: any }>() );

export const deleteTask = createAction('[Task] Delete Task', props<{ id: string }>() );
export const deleteTaskSuccess = createAction( '[Task] Delete Task Success', props<{ id: string }>() );
export const deleteTaskFailure = createAction( '[Task] Delete Task Failure', props<{ error: any }>() );
