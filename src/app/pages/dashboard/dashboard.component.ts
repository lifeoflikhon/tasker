import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from 'src/app/entities';
import { loadPastTasks, loadTodayTasks, loadUpcomingTasks } from 'src/app/store/actions/task.action';
import { selectAllTasks } from 'src/app/store/selectors/task.selector';
import { SubSink } from 'subsink';

const TIMEFRAMES = [
  { name: 'Past', id: 'past' },
  { name: 'Today', id: 'today' },
  { name: 'Upcoming', id: 'upcoming' },
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
  public activeTime: string = 'past';

  constructor(
    private readonly store: Store,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams
      .subscribe(params => {
        const timeframe = params['time'];
        
        if (!timeframe) {
          this.goToTime(this.activeTime);
        } else {
          this.activeTime = timeframe;
        }

        switch(timeframe) {
          case 'past':
            this.getPastTasks();
            break;

          case 'today':
            this.getTodayTasks();
            break;

          case 'upcoming':
            this.getUpcomingTasks();
            break;
        }
    });

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

  goToTime(time: string) {
    this.router.navigate(['/dashboard'], {
      queryParams: { time }
    });
  }

}
