import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app-state';
import { Observable } from 'rxjs';
import { Task } from '../tasks/models';
import { selectAllTasks } from '../../store/selectors';
import { loadTasks } from '../../store/actions';

@Component({
  selector: 'tasker-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public tasks$: Observable<Task[]> = this.store.select(selectAllTasks);

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadTasks());
  }

}
