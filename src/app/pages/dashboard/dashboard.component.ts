import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from 'src/app/entities';
import { loadPastTasks, loadTodayTasks, loadUpcomingTasks } from 'src/app/store/actions/task.action';
import { selectAllTasks } from 'src/app/store/selectors/task.selector';
import { SubSink } from 'subsink';

@Component({
  selector: 'tasker-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  public tasks$: Observable<Task[]> = this.store.select(selectAllTasks);
  private subs: SubSink = new SubSink();

  constructor(
    private readonly store: Store
  ) { }

  ngOnInit(): void {
    this.getPastTasks();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  getPastTasks(): void {
    this.store.dispatch(loadPastTasks());
  }

  getTodayTasks(): void {
    this.store.dispatch(loadTodayTasks());
  }

  getUpcomingTasks(): void {
    this.store.dispatch(loadUpcomingTasks());
  }

}
