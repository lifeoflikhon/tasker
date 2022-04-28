import { User } from '../../../models';

export interface Project {
  id?: string;
  name: string;
  description?: string;
  createdById?: string;
  createdBy?: User;
}
