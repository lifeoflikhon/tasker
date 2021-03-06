import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadTask } from '../../../../store/actions';
import { selectTask } from '../../../../store/selectors';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'tasker-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {
  public task$ = this.store.select(selectTask);

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.store.dispatch(loadTask({ id }));
    });
  }

}
