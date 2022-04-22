import { Project } from '../../projects/models';

export interface Task {
  createdAt: string;
  id: string;
  title: string;
  description?: string;
  url?: string;
  project?: Project;
  estimatedTime?: number;
  spentTime?: number;
}
