import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from 'src/app/entities';
import { loadPastTasks, loadTodayTasks, loadUpcomingTasks } from 'src/app/store/actions/task.action';
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
  public activeTime: string = timeframes.Past;

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

}
