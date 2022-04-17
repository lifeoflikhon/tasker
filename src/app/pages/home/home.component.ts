import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Task } from '../../entities';
import { SubSink } from 'subsink';
import { Observable } from 'rxjs';
import { selectAllTasks } from '../../store/selectors/task.selector';
import { loadPastTasks, loadTodayTasks, loadUpcomingTasks } from '../../store/actions/task.action';

@Component({
  selector: 'tasker-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
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
