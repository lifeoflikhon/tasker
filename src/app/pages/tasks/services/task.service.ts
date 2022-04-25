import { Inject, Injectable, Optional } from '@angular/core';
import { Task } from '../models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CrudService } from '../../../shared/services/crud.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private endpoint: string = 'tasks';

  constructor(
    private http: HttpClient,
    private crud: CrudService
  ) {
  }

  load(): Observable<Task[]> {
    return this.crud.getCollections<Task>(this.endpoint);
  }

  save( task: Task): Observable<Task> {
    return task.id ? this.edit( task ) : this.add( task );
  }

  getById(id: string): Observable<Task> {
    return this.http.get<Task>(`${this.endpoint}/${id}`);
  }

  delete( id: string): Observable<string> {
    return this.http.delete<string>(`${this.endpoint}/${id}`);
  }

  private add(task: Task): Observable<Task> {
    return this.http.post<Task>(this.endpoint, task);
  }

  private edit(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.endpoint}/${task.id}`, task);
  }
}
