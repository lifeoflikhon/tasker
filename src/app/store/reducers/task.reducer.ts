import { createReducer, on } from '@ngrx/store';
import { createTask, getPastTasks, getTasks, getTodayTasks, getUpcomingTasks } from '../actions';
import { Task } from '../../entities';

export interface TaskState {
  tasks: Task[];
}

export const initialState: TaskState = {
  tasks: [],
};

const taskReducer = createReducer(
  initialState,
  on(getPastTasks, ( state ) => state),
  on(getTodayTasks, ( state ) => state),
  on(getUpcomingTasks, ( state ) => state),
  on(getTasks, ( state ) => state),
  on(createTask, (state, { task }) => ({
    ...state,
    tasks: [...state.tasks, task],
  }))
);

export function reducer(state: TaskState | undefined, action: any) {
  return taskReducer(state, action);
}
