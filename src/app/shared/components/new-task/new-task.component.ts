import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project, Task } from '../../../entities';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'tasker-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  @Output() create: EventEmitter<Task> = new EventEmitter<Task>();
  @Input() projects: Project[] = [];

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
      newTask.project = this.projects.find(p => p.id === formValue.projectId);
      this.create.emit(newTask);
    }
  }

}
