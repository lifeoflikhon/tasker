import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../../tasks/models';
import { Project } from '../models';
import { CrudService } from '../../../shared/services/crud.service';
import { AuthService } from '../../../services';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private endpoint: string = 'projects';

  constructor(
    private http: HttpClient,
    private crud: CrudService,
    private authService: AuthService
  ) { }

  load(): Observable<Project[]> {
    return this.crud.getCollections(this.endpoint, ref => {
      return ref.where('createdById', '==', this.authService.loggedInUser.uid);
    });
  }

  save( project: Project): Observable<Project> {
    return project.id ? this.edit( project ) : this.add( project );
  }

  getById(id: string): Observable<Project> {
    return this.http.get<Project>(`${this.endpoint}/${id}`);
  }

  delete( id: string): Observable<string> {
    return this.http.delete<string>(`${this.endpoint}/${id}`);
  }

  private add(project: Project): Observable<any> {
    const user = this.authService.loggedInUser;
    const newProject: Project = {...project, createdById: user.uid, createdBy: user.providerData[0]}
    return this.crud.addDocument(this.endpoint, newProject);
  }

  private edit(project: Project): Observable<Project> {
    return this.http.put<Project>(`${this.endpoint}/${project.id}`, project);
  }
}
