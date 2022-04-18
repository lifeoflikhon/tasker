import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../../entities';
import { TaskService } from '../../services/task.service';

@Pipe({
  name: 'getBlocker'
})
export class GetBlockerPipe implements PipeTransform {

  constructor(
    private taskService: TaskService
  ) {
  }

  transform(tasks: Task[]): Task[] {
    return this.taskService.getBlocker(tasks);
  }

}
