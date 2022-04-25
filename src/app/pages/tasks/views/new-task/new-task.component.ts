import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../../models';
import { Store } from '@ngrx/store';
import { createTask } from '../../../../store/actions';

@Component({
  selector: 'tasker-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  taskForm: FormGroup;

  @Output() added: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required]],
      description: [''],
      estimatedTime: [0],
      spentTime: [0],
      url: ['']
    });
  }

  save() {
    if ( this.taskForm.invalid ) return;

    const newTask: Task = {
      ...this.taskForm.value,
      status: 'to do',
      createdAt: new Date().toISOString(),
      dueDate: new Date().toISOString(),
    };

    this.store.dispatch(createTask({ task: newTask }));

    this.taskForm.reset();
    this.added.emit();
  }

}
