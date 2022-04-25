import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app-state';
import { map, Observable } from 'rxjs';
import { Task } from '../tasks/models';
import { selectAllProjects, selectAllTasks } from '../../store/selectors';
import { createTask, deleteTask, loadProjects, loadTasks, updateTask } from '../../store/actions';
import { Project } from '../projects/models';
import { isFuture, isPast, isToday } from 'date-fns';
import { TaskService } from '../tasks/services/task.service';

const SECTIONS = [
  { keyword: 'to do', title: 'To Do', icon: 'circle', color: 'text-black' },
  { keyword: 'doing', title: 'Doing', icon: 'spinner', color: 'text-black' },
  { keyword: 'done', title: 'Done', icon: 'circle-check', color: 'text-black' },
  { keyword: 'blocker', title: 'Blocker', icon: 'times-circle', color: 'text-red-600' },
];

@Component({
  selector: 'tasker-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public tasks$: Observable<Task[]> = this.store.select(selectAllTasks).pipe(
    map(tasks => tasks.filter(task => isToday(new Date(task.dueDate))))
  );
  public projects$: Observable<Project[]> = this.store.select(selectAllProjects);
  sections: any[] = SECTIONS;
  activeTab: 'past' | 'today' | 'upcoming' = 'today';
  addingTask: boolean = false;

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadTasks());
    this.store.dispatch(loadProjects());
  }

  markAsDone( task: Task ) {
    const updatedTask: Task = {...task, status: 'done'};
    this.store.dispatch(updateTask( { task: updatedTask } ));
  }

  duplicate( task: Task ) {
    const newTask: Task = {...task, id: null, title: `${task.title} (copy)`};
    this.store.dispatch(createTask({ task: newTask }));
  }

  delete( task: Task ) {
    this.store.dispatch(deleteTask({ id: task.id }));
  }

  block(task: Task) {
    const updatedTask: Task = {...task, status: 'blocker'};
    this.store.dispatch(updateTask( { task: updatedTask } ));
  }

  unblock(task: Task) {
    const updatedTask: Task = {...task, status: 'doing'};
    this.store.dispatch(updateTask( { task: updatedTask } ));
  }

  getUpcoming() {
   this.activeTab = 'upcoming';
   this.tasks$ = this.store.select(selectAllTasks).pipe(
     map(tasks => tasks.filter(task => isFuture(new Date(task.dueDate))))
   );
  }

  getPast() {
    this.activeTab = 'past';
    this.tasks$ = this.store.select(selectAllTasks).pipe(
      map(tasks => tasks.filter(task => isPast(new Date(task.dueDate))))
    );
  }

  getToday() {
    this.activeTab = 'today';
    this.tasks$ = this.store.select(selectAllTasks).pipe(
      map(tasks => tasks.filter(task => isToday(new Date(task.dueDate))))
    );
  }

  toggleTask() {
    this.addingTask = !this.addingTask;
  }
}
