import { Injectable } from '@angular/core';
import { Task } from '../entities';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { isToday, isPast, isFuture, differenceInMinutes, parseISO } from 'date-fns';

@Injectable( {
  providedIn: 'root'
} )
export class TaskService {

  private readonly endpoint: string = 'http://localhost:3001/tasks';

  constructor(
    private http: HttpClient
  ) {
  }

  getPast(): Observable<Task[]> {
    return this.http.get<Task[]>( this.endpoint )
      .pipe(
        map((tasks) => tasks.filter((task) => isPast(parseISO(task.createdOn))))
      );
  }

  getToday(): Observable<Task[]> {
    return this.http.get<Task[]>( this.endpoint )
      .pipe(
        map((tasks) => tasks.filter((task) => isToday(parseISO(task.createdOn))))
      );
  }

  getUpcoming(): Observable<Task[]> {
    return this.http.get<Task[]>( this.endpoint )
      .pipe(
        map((tasks) => tasks.filter((task) => isFuture(parseISO(task.createdOn))))
      );
  }

  getCompleted(tasks: Task[]): Task[] {
    return tasks.filter((task) => task.isCompleted);
  }

  getInCompleted(tasks: Task[]): Task[] {
    return tasks.filter((task) => !task.isCompleted);
  }

  getBlocker(tasks: Task[]): Task[] {
    return tasks.filter((task) => task.isBlocker);
  }

  getNonBlocker(tasks: Task[]): Task[] {
    return tasks.filter((task) => !task.isBlocker);
  }

  create( task: Task ): Observable<Task> {
    return this.http.post<Task>( this.endpoint, task );
  }

  edit( task: Task ): Observable<Task> {
    return this.http.put<Task>( `${this.endpoint}/${task.id}`, task );
  }

  delete( task: Task ): Observable<Task> {
    return this.http.delete<Task>( `${this.endpoint}/${task.id}` );
  }

  getById( id: number ): Observable<Task> {
    return this.http.get<Task>( `${this.endpoint}/${id}` );
  }

  duplicate( task: Task ): Observable<Task> {
    const newTask: Task = new Task();
    const modifiedTask: Task = {
      ...newTask,
      title: `${task.title} (copy)`,
      createdOn: new Date().toISOString(),
      isCompleted: false
    }

    delete modifiedTask.id;

    return this.create( modifiedTask );
  }

  toggleActive(task: Task): Observable<Task> {
    return task.isActive ? this.markAsInactive( task ) : this.markAsActive( task );
  }

  toggleComplete( task: Task ): Observable<Task> {
    return task.isCompleted ? this.markAsUncompleted( task ) : this.markAsCompleted( task );
  }

  toggleBlock( task: Task ): Observable<Task> {
    return task.isBlocker ? this.markAsNonBlocker( task ) : this.markAsBlocker( task );
  }

  toggleRunningStatus( task: Task ): Observable<Task> {
    return task.isRunning ? this.stop( task ) : this.start( task );
  }

  private start( task: Task ): Observable<Task> {
    task.isRunning = true;
    task.startedOn = new Date();
    return this.edit( task );
  }

  private stop( task: Task ): Observable<Task> {
    task.isRunning = false;
    task.stoppedOn = new Date();
    task.spentTime += differenceInMinutes( task.stoppedOn, task.startedOn );
    return this.edit( task );
  }

  private markAsInactive( task: Task ): Observable<Task> {
    task.isActive = false;
    return this.edit( task );
  }

  private markAsActive( task: Task ): Observable<Task> {
    task.isActive = true;
    return this.edit( task );
  }

  private markAsCompleted( task: Task ): Observable<Task> {
    task.isCompleted = true;
    return this.edit( task );
  }

  private markAsUncompleted( task: Task ): Observable<Task> {
    task.isCompleted = false;
    return this.edit( task );
  }

  private markAsBlocker(task: Task): Observable<Task> {
    task.isBlocker = true;
    return this.edit( task );
  }

  private markAsNonBlocker(task: Task): Observable<Task> {
    task.isBlocker = false;
    return this.edit( task );
  }
}
