import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from 'src/app/entities';
import {
  completeTask,
  createTask,
  loadPastTasks,
  loadTodayTasks,
  loadUpcomingTasks
} from 'src/app/store/actions/task.action';
import { selectAllTasks } from 'src/app/store/selectors/task.selector';
import { SubSink } from 'subsink';

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
  private subs: SubSink = new SubSink();

  public timeframes = TIMEFRAMES;
  public timeframesEnum = timeframes;
  public activeTime: string = timeframes.Past;
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

  }

  stop( task: Task ) {

  }

  view( task: Task ) {

  }

  unblock( task: Task ) {

  }

  block( task: Task ) {

  }

  active( task: Task ) {

  }

  inactive( task: Task ) {

  }

  complete( task: Task ) {
    this.store.dispatch(completeTask({ task }));
  }

  inComplete( task: Task ) {

  }

  delete( task: Task ) {

  }

  duplicate( task: Task ) {

  }

  addNewTask() {
    this.onCreationMode = true;
  }

  create( $event: Task ) {
    this.store.dispatch(createTask( { task: $event } ));
    this.onCreationMode = false;
  }
}
