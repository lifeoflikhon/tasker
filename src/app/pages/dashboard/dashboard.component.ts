import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app-state';
import { Observable } from 'rxjs';
import { Task } from '../tasks/models';
import { selectAllProjects, selectAllTasks } from '../../store/selectors';
import { loadProjects, loadTasks } from '../../store/actions';
import { Project } from '../projects/models';

@Component({
  selector: 'tasker-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public tasks$: Observable<Task[]> = this.store.select(selectAllTasks);
  public projects$: Observable<Project[]> = this.store.select(selectAllProjects);

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadTasks());
    this.store.dispatch(loadProjects());
  }

}
