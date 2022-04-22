import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app-state';
import { Observable } from 'rxjs';
import { Task } from '../tasks/models';
import { selectAllProjects, selectAllTasks } from '../../store/selectors';
import { loadProjects, loadTasks, updateTask } from '../../store/actions';
import { Project } from '../projects/models';

const SECTIONS = [
  { keyword: 'to do', title: 'To Do', icon: 'circle', color: 'text-black' },
  { keyword: 'doing', title: 'Doing', icon: 'spinner', color: 'text-black' },
  { keyword: 'done', title: 'Done', icon: 'circle-check', color: 'text-black' },
  { keyword: 'blocker', title: 'Blocker', icon: 'times-circle', color: 'text-red-600' },
];

@Component({
  selector: 'tasker-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public tasks$: Observable<Task[]> = this.store.select(selectAllTasks);
  public projects$: Observable<Project[]> = this.store.select(selectAllProjects);
  sections: any[] = SECTIONS;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadTasks());
    this.store.dispatch(loadProjects());
  }

  markAsDone( task: Task ) {
    const updatedTask: Task = {...task, status: 'done'};
    this.store.dispatch(updateTask( { task: updatedTask } ));
  }
}
