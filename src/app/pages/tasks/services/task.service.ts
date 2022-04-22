import { Injectable } from '@angular/core';
import { Task } from '../models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private endpoint: string = 'tasks';

  constructor(
    private http: HttpClient
  ) { }

  loadTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.endpoint);
  }

  saveTask(task: Task): Observable<Task> {
    return task.id ? this.editTask( task ) : this.addTask( task );
  }

  getById(id: string): Observable<Task> {
    return this.http.get<Task>(`${this.endpoint}/${id}`);
  }

  deleteTask(id: string): Observable<string> {
    return this.http.delete<string>(`${this.endpoint}/${id}`);
  }

  private addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.endpoint, task);
  }

  private editTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.endpoint}/${task.id}`, task);
  }
}
