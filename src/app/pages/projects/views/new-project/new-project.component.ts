import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Project } from '../../models';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/app-state';
import { createProject } from '../../../../store/actions';
import { Router } from '@angular/router';

@Component({
  selector: 'tasker-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {
  projectForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.projectForm = this.fb.group({
      name: ['', [Validators.required]],
      description: [''],
    });
  }

  save() {
    if ( this.projectForm.invalid ) {
      return;
    }

    const projectFormValue = this.projectForm.value;
    const newProject: Project = {
      name: projectFormValue.name,
      description: projectFormValue.description,
    };
    this.store.dispatch(createProject( { project: newProject } ));
    this.router.navigate(['/projects']);
  }

}
