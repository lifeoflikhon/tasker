import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, take, takeLast } from 'rxjs';
import { Task } from '../../entities';
import { Store } from '@ngrx/store';
import { selectAllTasks } from '../../store/selectors/task.selector';
import { getTaskById } from '../../store/actions/task.action';

@Component({
  selector: 'tasker-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {
  public task$: Observable<Task> = this.store.select(selectAllTasks).pipe(
    map(tasks => tasks.find(task => task.id === +this.activatedRoute.snapshot.params.id))
  );

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(params => {
        const taskId = +params['id'];
        this.store.dispatch(getTaskById({ taskId }));
      });
  }

}
