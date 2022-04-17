import { Project } from './project.entity';
import { User } from './user.entity';
import { PriorityLevel } from '../enums';

export class Task {
  id?: number;
  title?: string;
  description?: string;
  priority?: PriorityLevel;
  project?: Project;
  assignee?: User;
  estimatedTime?: number = 0; // minutes
  spentTime?: number = 0; // minutes
  remindBefore?: number = 0; // minutes
  createdOn?: Date = new Date();
  isCompleted?: boolean = false;
  isRunning?: boolean = false;
  isBlocker?: boolean = false;
  isActive?: boolean = true;
  startedOn?: Date;
  stoppedOn?: Date;
}
