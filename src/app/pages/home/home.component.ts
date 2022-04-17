import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Task } from '../../entities';
import { SubSink } from 'subsink';
import { Observable } from 'rxjs';

@Component({
  selector: 'tasker-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public tasks$: Observable<Task[]>;
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
