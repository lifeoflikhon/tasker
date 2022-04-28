import { Project } from '../../projects/models';
import { User } from '../../../models';

export interface Task {
  dueDate?: string;

  id?: string;

  title: string;
  description?: string;
  url?: string;

  projectId?: string;
  project?: Project;

  assigneeId?: string;
  assignee?: User;

  estimatedTime?: number;
  spentTime?: number;

  createdAt?: string;
  createdBy?: string;

  updatedAt?: string;
  updatedBy?: string;

  deletedAt?: string;
  deletedBy?: string;

  isDeleted?: boolean;

  status: 'to do' | 'done' | 'blocker';
}
