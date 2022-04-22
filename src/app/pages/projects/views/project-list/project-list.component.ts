import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/app-state';
import { Observable } from 'rxjs';
import { Project } from '../../models';
import { selectAllProjects } from '../../../../store/selectors';
import { loadProjects } from '../../../../store/actions';

@Component({
  selector: 'tasker-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  public projects$: Observable<Project[]> = this.store.select(selectAllProjects);

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadProjects());
  }

}
