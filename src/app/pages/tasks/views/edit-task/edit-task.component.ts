import { Component, OnInit } from '@angular/core';
import { selectTask } from '../../../../store/selectors';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadTask } from '../../../../store/actions';

@Component({
  selector: 'tasker-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {
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
