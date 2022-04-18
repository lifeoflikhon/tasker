import { Task } from '../../entities';
import { createReducer, on } from '@ngrx/store';
import {
  activeTask,
  activeTaskFailure,
  activeTaskSuccess,
  blockTask, blockTaskFailure, blockTaskSuccess,
  completeTask,
  completeTaskFailure,
  completeTaskSuccess,
  createTask,
  createTaskFailure,
  createTaskSuccess, deleteTask, deleteTaskFailure, deleteTaskSuccess,
  duplicateTask, duplicateTaskFailure, duplicateTaskSuccess, inactiveTask, inactiveTaskFailure, inactiveTaskSuccess,
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
  loadUpcomingTasksSuccess, unblockTask, unblockTaskFailure, unblockTaskSuccess
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

  // duplicate task
  on(duplicateTask, ( state) => ({ ...state, status: 'loading', })),
  on(duplicateTaskSuccess, ( state, { task }) => ({ ...state, tasks: [...state.tasks, task], status: 'success', error: null })),
  on(duplicateTaskFailure, ( state, { error }) => ({ ...state, status: 'error', error })),

  // complete task
  on(completeTask, ( state) => ({ ...state, status: 'loading', })),
  on(completeTaskSuccess, (state, { task }) => ({ ...state, tasks: state.tasks.map(t => t.id === task.id ? task : t), status: 'success', error: null })),
  on(completeTaskFailure, ( state, { error }) => ({ ...state, status: 'error', error })),

  // incomplete task
  on(incompleteTask, ( state) => ({ ...state, status: 'loading', })),
  on(incompleteTaskSuccess, (state, { task }) => ({ ...state, tasks: state.tasks.map(t => t.id === task.id ? task : t), status: 'success', error: null })),
  on(incompleteTaskFailure, ( state, { error }) => ({ ...state, status: 'error', error })),

  // delete task
  on(deleteTask, ( state) => ({ ...state, status: 'loading', })),
  on(deleteTaskSuccess, (state, { task }) => ({ ...state, tasks: state.tasks.filter(t => t.id !== task.id), status: 'success', error: null })),
  on(deleteTaskFailure, ( state, { error }) => ({ ...state, status: 'error', error })),

  // block task
  on(blockTask, ( state) => ({ ...state, status: 'loading', })),
  on(blockTaskSuccess, (state, { task }) => ({ ...state, tasks: state.tasks.map(t => t.id === task.id ? task : t), status: 'success', error: null })),
  on(blockTaskFailure, ( state, { error }) => ({ ...state, status: 'error', error })),

  // unblock task
  on(unblockTask, ( state) => ({ ...state, status: 'loading', })),
  on(unblockTaskSuccess, (state, { task }) => ({ ...state, tasks: state.tasks.map(t => t.id === task.id ? task : t), status: 'success', error: null })),
  on(unblockTaskFailure, ( state, { error }) => ({ ...state, status: 'error', error })),

  // active task
  on(activeTask, ( state) => ({ ...state, status: 'loading', })),
  on(activeTaskSuccess, (state, { task }) => ({ ...state, tasks: state.tasks.map(t => t.id === task.id ? task : t), status: 'success', error: null })),
  on(activeTaskFailure, ( state, { error }) => ({ ...state, status: 'error', error })),

  // inactive task
  on(inactiveTask, ( state) => ({ ...state, status: 'loading', })),
  on(inactiveTaskSuccess, (state, { task }) => ({ ...state, tasks: state.tasks.map(t => t.id === task.id ? task : t), status: 'success', error: null })),
  on(inactiveTaskFailure, ( state, { error }) => ({ ...state, status: 'error', error })),
);
