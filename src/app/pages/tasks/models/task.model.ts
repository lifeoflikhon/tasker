import { Project } from '../../projects/models';

export interface Task {
  dueDate?: string;

  id?: string;

  title: string;
  description?: string;
  url?: string;

  projectId?: string;
  project?: Project;

  estimatedTime?: number;
  spentTime?: number;

  createdAt?: string;
  createdBy?: string;

  updatedAt?: string;
  updatedBy?: string;

  deletedAt?: string;
  deletedBy?: string;

  isDeleted?: boolean;

  status: 'to do' | 'doing' | 'done' | 'blocker';
}
