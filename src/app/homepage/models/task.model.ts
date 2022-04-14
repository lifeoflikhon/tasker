import { TaskComment } from './comment.model';
import { Project } from './project.model';
import { User } from './user.model';
import { NonBlockerApp } from './non-blocker-app.model';
import { TaskPriority } from '../enum/task-priority.enum';

export class Task {
  id: number;
  name: string;
  projectId: number;
  project: Project;
  isCompleted: boolean = false;
  shouldCompleteBefore: Date = new Date();
  estimatedTime: number = 0;
  spentTime: number = 0;
  isRunning: boolean = false;
  isBlocker: boolean = false;
  isInactive: boolean = false;
  isDeleted: boolean = false;
  priority: TaskPriority = TaskPriority.Medium;
  assignedToId: number;
  assignedTo: User;
  description: string;
  remindBeforeInMinutes: number = 15;
  isRepeatable: boolean = false;
  nonBlockerAppIds: number[] = [];
  nonBlockerApps: NonBlockerApp[] = [];
  comments: TaskComment[] = [];
}






