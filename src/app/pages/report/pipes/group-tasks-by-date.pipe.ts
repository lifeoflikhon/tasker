import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../../tasks/models';
import { TaskGroup } from '../models';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'groupTasksByDate',
})
export class GroupTasksByDatePipe implements PipeTransform {

  constructor(
    private datePipe: DatePipe
  ) {
  }

  transform(tasks: Task[]): TaskGroup[] {
    const formattedTasks = tasks.map(task => {
      return {
        ...task,
        date: this.datePipe.transform(task.createdAt, 'dd/MM/yyyy')
      }
    });

    const groupedTasks = formattedTasks.reduce((acc, task) => {
      const date = task.date;
      const tasks = acc[date] || [];
      tasks.push(task);
      acc[date] = tasks;
      return acc;
    }, {});

    const dates = Object.keys(groupedTasks);

    return dates.map(date => {
      return {
        date,
        tasks: groupedTasks[date]
      }
    });
  }

}
