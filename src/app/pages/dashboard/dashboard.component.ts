import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Project, Task } from 'src/app/entities';
import {
  activeTask,
  blockTask,
  completeTask,
  createTask, deleteTask, duplicateTask, inactiveTask, incompleteTask,
  loadPastTasks,
  loadTodayTasks,
  loadUpcomingTasks, startTask, stopTask, unblockTask
} from 'src/app/store/actions/task.action';
import { selectAllTasks } from 'src/app/store/selectors/task.selector';
import { SubSink } from 'subsink';
import { selectAllProjects } from '../../store/selectors/project.selector';
import { loadProjects } from '../../store/actions/project.action';

enum timeframes {
  Past = 'past',
  Today = 'today',
  Upcoming = 'upcoming'
}

const TIMEFRAMES = [
  { name: 'Past', id: timeframes.Past },
  { name: 'Today', id: timeframes.Today },
  { name: 'Upcoming', id: timeframes.Upcoming },
];

@Component({
  selector: 'tasker-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  public tasks$: Observable<Task[]> = this.store.select(selectAllTasks);
  public projects$: Observable<Project[]> = this.store.select(selectAllProjects);

  private subs: SubSink = new SubSink();

  public timeframes = TIMEFRAMES;
  public timeframesEnum = timeframes;
  public activeTime: string = timeframes.Today;
  public onCreationMode: boolean = false;

  constructor(
    private readonly store: Store,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams
      .subscribe(params => {
        const timeframe = params['time'];
        !timeframe ? this.goToTime(this.activeTime) : this.activeTime = timeframe;
        this.handleDataLoad(timeframe);
    });

    this.store.dispatch(loadProjects());
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

  goToTime(time: string) {
    this.router.navigate(['/dashboard'], {
      queryParams: { time }
    });
  }

  handleDataLoad(time: string) {
    switch(time) {
      case timeframes.Past:
        this.getPastTasks();
        break;

      case timeframes.Today:
        this.getTodayTasks();
        break;

      case timeframes.Upcoming:
        this.getUpcomingTasks();
        break;
    }
  }

  start( task: Task ) {
    this.store.dispatch(startTask({ task }));
  }

  stop( task: Task ) {
    this.store.dispatch(stopTask({ task }));
  }

  view( task: Task ) {
    this.router.navigate(['/tasks', task.id]);
  }

  unblock( task: Task ) {
    this.store.dispatch(unblockTask({ task }));
  }

  block( task: Task ) {
    this.store.dispatch(blockTask({ task }));
  }

  active( task: Task ) {
    this.store.dispatch(activeTask({ task }));
  }

  inactive( task: Task ) {
    this.store.dispatch(inactiveTask({ task }));
  }

  complete( task: Task ) {
    this.store.dispatch(completeTask({ task }));
  }

  inComplete( task: Task ) {
    this.store.dispatch(incompleteTask({ task }));
  }

  delete( task: Task ) {
    this.store.dispatch( deleteTask({ task }));
  }

  duplicate( task: Task ) {
    this.store.dispatch(duplicateTask({ task }));
  }

  addNewTask() {
    this.onCreationMode = true;
  }

  create( $event: Task ) {
    this.store.dispatch(createTask( { task: $event } ));
    this.onCreationMode = false;
  }
}
