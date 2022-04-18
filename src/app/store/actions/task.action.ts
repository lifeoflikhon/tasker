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

export const duplicateTask = createAction( '[Task] Duplicate Task', props<{ task: Task }>() );
export const duplicateTaskSuccess = createAction( '[Task] Duplicate Task Success', props<{ task: Task }>() );
export const duplicateTaskFailure = createAction( '[Task] Duplicate Task Failure', props<{ error: any }>() );

export const completeTask = createAction( '[Task] Complete Task', props<{ task: Task }>() );
export const completeTaskSuccess = createAction( '[Task] Complete Task Success', props<{ task: Task }>() );
export const completeTaskFailure = createAction( '[Task] Complete Task Failure', props<{ error: any }>() );

export const incompleteTask = createAction( '[Task] Incomplete Task', props<{ task: Task }>() );
export const incompleteTaskSuccess = createAction( '[Task] Incomplete Task Success', props<{ task: Task }>() );
export const incompleteTaskFailure = createAction( '[Task] Incomplete Task Failure', props<{ error: any }>() );

export const deleteTask = createAction( '[Task] Delete Task', props<{ task: Task }>() );
export const deleteTaskSuccess = createAction( '[Task] Delete Task Success', props<{ task: Task }>() );
export const deleteTaskFailure = createAction( '[Task] Delete Task Failure', props<{ error: any }>() );

export const blockTask = createAction( '[Task] Block Task', props<{ task: Task }>() );
export const blockTaskSuccess = createAction( '[Task] Block Task Success', props<{ task: Task }>() );
export const blockTaskFailure = createAction( '[Task] Block Task Failure', props<{ error: any }>() );

export const unblockTask = createAction( '[Task] Unblock Task', props<{ task: Task }>() );
export const unblockTaskSuccess = createAction( '[Task] Unblock Task Success', props<{ task: Task }>() );
export const unblockTaskFailure = createAction( '[Task] Unblock Task Failure', props<{ error: any }>() );

export const activeTask = createAction( '[Task] Active Task', props<{ task: Task }>() );
export const activeTaskSuccess = createAction( '[Task] Active Task Success', props<{ task: Task }>() );
export const activeTaskFailure = createAction( '[Task] Active Task Failure', props<{ error: any }>() );

export const inactiveTask = createAction( '[Task] Inactive Task', props<{ task: Task }>() );
export const inactiveTaskSuccess = createAction( '[Task] Inactive Task Success', props<{ task: Task }>() );
export const inactiveTaskFailure = createAction( '[Task] Inactive Task Failure', props<{ error: any }>() );
