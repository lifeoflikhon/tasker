import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from '../../../entities';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'tasker-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  @Output() create: EventEmitter<Task> = new EventEmitter<Task>();

  taskForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      projectId: [0],
    });
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      const task: Task = new Task();
      const formValue = this.taskForm.value;
      const newTask: Task = { ...task, ...formValue};

      // find and bind project

      this.create.emit(newTask);

    }
  }

}
