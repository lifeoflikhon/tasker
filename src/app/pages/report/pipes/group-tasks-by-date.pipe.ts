import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../../tasks/models';
import { TaskGroup } from '../models';

@Pipe({
  name: 'groupTasksByDate'
})
export class GroupTasksByDatePipe implements PipeTransform {

  transform(tasks: Task[]): TaskGroup[] {
    return [];
  }

}
