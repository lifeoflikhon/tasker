import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { NewProjectComponent } from './views/new-project/new-project.component';
import { ProjectDetailComponent } from './views/project-detail/project-detail.component';
import { ProjectListComponent } from './views/project-list/project-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    ProjectsComponent,
    NewProjectComponent,
    ProjectDetailComponent,
    ProjectListComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ProjectsModule { }
