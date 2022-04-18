import { TaskState } from './reducers/task.reducer';
import { ProjectState } from './reducers/project.reducer';

export interface AppState {
  projects: ProjectState;
  tasks: TaskState;
}
