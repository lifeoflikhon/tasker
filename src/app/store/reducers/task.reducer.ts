import { Task } from '../../entities';
import { createReducer, on } from '@ngrx/store';
import {
  createTask, createTaskFailure, createTaskSuccess,
  loadPastTasks,
  loadPastTasksFailure,
  loadPastTasksSuccess,
  loadTodayTasks, loadTodayTasksFailure,
  loadTodayTasksSuccess, loadUpcomingTasks, loadUpcomingTasksFailure, loadUpcomingTasksSuccess
} from '../actions/task.action';

export interface TaskState {
  tasks: Task[];
  error: any;
  status: 'pending' | 'success' | 'error' | 'loading';
}

export const initialTaskState: TaskState = {
  tasks: [],
  error: null,
  status: 'pending',
};

export const taskReducer = createReducer(
  initialTaskState,

  // load past tasks
  on(loadPastTasks, ( state) => ({ ...state, status: 'loading', })),
  on(loadPastTasksSuccess, ( state, { tasks }) => ({ ...state, tasks, status: 'success', error: null })),
  on(loadPastTasksFailure, ( state, { error }) => ({ ...state, status: 'error', error })),

  // load today tasks
  on(loadTodayTasks, ( state) => ({ ...state, status: 'loading', })),
  on(loadTodayTasksSuccess, ( state, { tasks }) => ({ ...state, tasks, status: 'success', error: null })),
  on(loadTodayTasksFailure, ( state, { error }) => ({ ...state, status: 'error', error })),

  // load upcoming tasks
  on(loadUpcomingTasks, ( state) => ({ ...state, status: 'loading', })),
  on(loadUpcomingTasksSuccess, ( state, { tasks }) => ({ ...state, tasks, status: 'success', error: null })),
  on(loadUpcomingTasksFailure, ( state, { error }) => ({ ...state, status: 'error', error })),

  // create task
  on(createTask, ( state) => ({ ...state, status: 'loading', })),
  on(createTaskSuccess, ( state, { task }) => ({ ...state, tasks: [...state.tasks, task], status: 'success', error: null })),
  on(createTaskFailure, ( state, { error }) => ({ ...state, status: 'error', error })),
);
