import { Task } from '../../pages/tasks/models';
import { createReducer, on } from '@ngrx/store';
import {
  createTask, createTaskFailure, createTaskSuccess, deleteTask, deleteTaskFailure, deleteTaskSuccess,
  loadTask,
  loadTaskFailure,
  loadTasks,
  loadTasksFailure,
  loadTasksSuccess,
  loadTaskSuccess, updateTask, updateTaskFailure, updateTaskSuccess
} from '../actions';

export interface TaskState {
  tasks: Task[];
  task: Task;
  loading: boolean;
  error: any;
}

export const initialTaskState: TaskState = {
  tasks: [],
  task: null,
  loading: false,
  error: null
};

export const taskReducer = createReducer(
  initialTaskState,

  // Load Tasks
  on(loadTasks, state => ({ ...state, loading: true })),
  on(loadTasksSuccess, (state, { tasks }) => ({ ...state, tasks, loading: false })),
  on(loadTasksFailure, (state, { error }) => ({ ...state, error, loading: false })),

  // Load Task
  on(loadTask, state => ({ ...state, loading: true })),
  on(loadTaskSuccess, (state, { task }) => ({ ...state, task, loading: false })),
  on(loadTaskFailure, (state, { error }) => ({ ...state, task: null, error, loading: false })),

  // Create Task
  on(createTask, state => ({ ...state, loading: true })),
  on(createTaskSuccess, (state, { task }) => ({
    ...state,
    tasks: [...state.tasks, task],
    loading: false
  })),
  on(createTaskFailure, (state, { error }) => ({ ...state, error, loading: false })),

  // Update Task
  on(updateTask, state => ({ ...state, loading: true })),
  on(updateTaskSuccess, (state, { task }) => ({
    ...state,
    tasks: state.tasks.map(t => t.id === task.id ? task : t),
    loading: false
  })),
  on(updateTaskFailure, (state, { error }) => ({ ...state, error, loading: false })),

  // Delete Task
  on(deleteTask, state => ({ ...state, loading: true })),
  on(deleteTaskSuccess, (state, { id }) => ({
    ...state,
    tasks: state.tasks.filter(task => task.id !== id),
    loading: false
  })),
  on(deleteTaskFailure, (state, { error }) => ({ ...state, error, loading: false }))
);
