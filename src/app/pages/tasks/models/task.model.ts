import { Project } from '../../projects/models';

export interface Task {
  id: number;
  title: string;
  description?: string;
  url?: string;
  project?: Project;
  estimatedTime?: number;
  spentTime?: number;
}
