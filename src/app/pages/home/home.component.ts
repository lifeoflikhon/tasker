import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getTasks } from '../../store';
import { Task } from '../../entities';
import { SubSink } from 'subsink';
import { Observable } from 'rxjs';
import { getPastTasks } from '../../store/actions';

@Component({
  selector: 'tasker-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public tasks$: Observable<Task[]> = this.store.select(getTasks);
  private subs: SubSink = new SubSink();

  constructor(
    private readonly store: Store
  ) { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
