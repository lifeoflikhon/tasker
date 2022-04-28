import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../../models';
import { Store } from '@ngrx/store';
import { createTask, loadProjects, updateTask } from '../../../../store/actions';
import { Observable } from 'rxjs';
import { Project } from '../../../projects/models';
import { selectAllProjects } from '../../../../store/selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'tasker-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  taskForm: FormGroup;

  @Input() task: Task;

  @Output() added: EventEmitter<any> = new EventEmitter<any>();
  projects$: Observable<Project[]> = this.store.select(selectAllProjects);

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadProjects());

    this.taskForm = this.fb.group({
      title: ['', [Validators.required]],
      description: [''],
      estimatedTime: [0],
      spentTime: [0],
      dueDate: [new Date().toISOString()],
      url: [''],
      projectId: [null],
      project: [null]
    });

    if (this.task) {
      this.taskForm.patchValue(this.task);
    }
  }

  save() {
    if ( this.taskForm.invalid ) return;

    if ( this.task.id ) {
      this.store.dispatch(updateTask({ task: {
          ...this.taskForm.value,
          dueDate: new Date(this.taskForm.value.dueDate).toISOString(),
          id: this.task.id
        } }));
      this.router.navigate(['/tasks', this.task.id]);
      return;
    }

    const newTask: Task = {
      ...this.taskForm.value,
      status: 'to do',
      createdAt: new Date().toISOString(),
      dueDate: new Date(this.taskForm.value.dueDate).toISOString(),
    };

    this.store.dispatch(createTask({ task: newTask }));

    this.taskForm.reset();
    this.added.emit();
  }

  onProjectSelect( $event: any ) {
    this.taskForm.patchValue({ project: $event });
  }
}
