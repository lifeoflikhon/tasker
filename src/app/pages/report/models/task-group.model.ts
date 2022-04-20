import { Task } from '../../tasks/models';

export interface TaskGroup {
  tasks: Task[];
  date: Date;
}
