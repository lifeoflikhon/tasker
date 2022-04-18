import { Pipe, PipeTransform } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../entities';

@Pipe({
  name: 'getCompleted'
})
export class GetCompletedPipe implements PipeTransform {

  constructor(
    private taskService: TaskService
  ) {
  }
  transform(tasks: Task[]): Task[] {
    return this.taskService.getCompleted(tasks);
  }

}
