import { AuthState, ProjectState, TaskState } from './reducers';

export interface AppState {
  tasks: TaskState;
  projects: ProjectState;
  auth: AuthState;
}
