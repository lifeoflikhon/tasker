import { createAction, props } from '@ngrx/store';
import { Task } from '../../entities';

export const GET_PAST_TASKS = '[Task] Get Past Tasks';
export const GET_TODAY_TASKS = '[Task] Get Today Tasks';
export const GET_UPCOMING_TASKS = '[Task] Get Upcoming Tasks';
export const CREATE_TASK = '[Task] Create Task';
export const UPDATE_TASK = '[Task] Update Task';
export const DELETE_TASK = '[Task] Delete Task';
export const DUPLICATE_TASK = '[Task] Duplicate Task';
export const GET_TASK_BY_ID = '[Task] Get Task By Id';
export const START_TASK = '[Task] Start Task';
export const STOP_TASK = '[Task] Stop Task';
export const COMPLETE_TASK = '[Task] Complete Task';
export const INCOMPLETE_TASK = '[Task] Incomplete Task';
export const BLOCK_TASK = '[Task] Block Task';
export const UNBLOCK_TASK = '[Task] Unblock Task';
export const ACTIVATE_TASK = '[Task] Activate Task';
export const DEACTIVATE_TASK = '[Task] Deactivate Task';

export const getPastTasks = createAction(GET_PAST_TASKS, props<{ tasks: Task[] }>());
export const getTodayTasks = createAction(GET_TODAY_TASKS, props<{ tasks: Task[] }>());
export const getUpcomingTasks = createAction(GET_UPCOMING_TASKS, props<{ tasks: Task[] }>());
export const createTask = createAction(CREATE_TASK, props<{ task: Task }>());
export const updateTask = createAction(UPDATE_TASK, props<{ task: Task }>());
export const deleteTask = createAction(DELETE_TASK, props<{ taskId: number }>());
export const duplicateTask = createAction(DUPLICATE_TASK, props<{ task: Task }>());
export const getTaskById = createAction(GET_TASK_BY_ID, props<{ taskId: number }>());
export const startTask = createAction(START_TASK, props<{ task: Task }>());
export const stopTask = createAction(STOP_TASK, props<{ task: Task }>());
export const completeTask = createAction(COMPLETE_TASK, props<{ task: Task }>());
export const incompleteTask = createAction(INCOMPLETE_TASK, props<{ task: Task }>());
export const blockTask = createAction(BLOCK_TASK, props<{ task: Task }>());
export const unblockTask = createAction(UNBLOCK_TASK, props<{ task: Task }>());
export const activateTask = createAction(ACTIVATE_TASK, props<{ task: Task }>());
export const deactivateTask = createAction(DEACTIVATE_TASK, props<{ task: Task }>());
