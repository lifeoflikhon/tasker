import { Pipe, PipeTransform } from '@angular/core';
import { Task, TaskGroup } from '../layout/tasks/tasks.component';

@Pipe({
  name: 'generateTaskGroups'
})
export class GenerateTaskGroupsPipe implements PipeTransform {

  transform(tasks: Task[], isBlocker: boolean): TaskGroup[] {

    if ( isBlocker ) {
      return [{
        isCollapsed: false,
        stage: 'Blocker',
        tasks: tasks.filter(task => task.isBlocker)
      }];
    }

    return [];
  }

}
