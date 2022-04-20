import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { NewProjectComponent } from './views/new-project/new-project.component';
import { ProjectDetailComponent } from './views/project-detail/project-detail.component';
import { ProjectListComponent } from './views/project-list/project-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    children: [
      {
        path: 'new',
        component: NewProjectComponent
      },
      {
        path: ':id',
        component: ProjectDetailComponent
      },
      {
        path: '',
        component: ProjectListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
